import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);

    const eventos = todosOsEventos.filter((evento) => {
      const statusMatch =
        filtro.status === "Completos"
          ? evento.completo
          : filtro.status === "Incompletos"
          ? !evento.completo
          : true;

      const dataMatch =
        !filtro.data ||
        filtro.data.toISOString().slice(0, 10) ===
          evento.inicio.toISOString().slice(0, 10);

      //se não tiver match retorna a lista todosOsEventos

      return statusMatch && dataMatch;
    });

    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttp = await fetch("http://localhost:8080/eventos");
    const eventosJson: IEvento[] = await respostaHttp.json();
    return eventosJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }));
  },
});
