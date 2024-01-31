import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useRemoverEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEventos((listaAntiga) => {
      const novaLista = [
        ...listaAntiga.filter((evt) => evt.id !== evento.id),
      ];
      
      return [...novaLista];
    });
  };
};

export default useRemoverEvento;
