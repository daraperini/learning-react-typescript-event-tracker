# Alura Event Tracker

Hello! Event Tracker's code was refactored during Alura's course *From scratch: HTML and CSS for Web Projects* with the goal to remove prop drilling while managing states using Recoil. I created custom hooks for each operation extracting each resposability for each code and encapsulating Recoil's access. This facilitates future code refactorings. I also created a debuger component - considering that Recoil doesn't has an extension with this resposability - to help during the development.

I mocked an API using JSON server to practice HTTP requests using Recoil. Follow the steps below to inicialize the API and access the final result of the page.

To see the final result, click [here](https://learning-react-typescript-event-tracker.vercel.app/).

## Used tools:

* React
* TypeScript
* Recoil
* JSON server

*(Alura is a Brazilian technology school and for acessibility reasons this code is in Portuguese)*

## Initializing the project on your computer

- Clone the repository using the command line:
    - git clone *link of the repository*
    - cd *file of the repository*
 
- Go to the projects main file:
    - cd *name of the file*
 
- Run the code:
    - npm install (to install all project's dependencies)
    - npm start (to open the project on your browser)
 
- Follow the steps to install and inicialize [JSON server](https://github.com/typicode/json-server#getting-started)
 
* In case the project does not opend automatically type http://localhost:3000 on your browser
* In case the JSON server runs in the same port as the project type *npx json-server db.json -p anotherNumberOfPort* to switch JSON server port


#

# Alura Event Tracker

Olá! O código do Event Tracker foi refatorado durante o curso da Alura *React: gerenciando estado com Recoil*, com o objetivo de remover prop drilling gerenciando estados utilizando o Recoil. Foram criados hooks customizados para cada operação, extraindo cada código por responsabilidade e encapsulando o acesso ao Recoil, o que facilita futuras refatorações do código. Foi, ainda, criado um componente com resposabilidade de debuger - considerando que o Recoil não possui uma extensão própria com esse objetivo -  para auxiliar durante o desenvolvimento.

Uma API foi mockada utilizando JSON server para prática de requisições HTTP utilizando Recoil. Siga os passos abaixo para iniciar a API e ver o resultado final da página.

Para acessar o resultado final da página, clique [aqui](https://learning-react-typescript-event-tracker.vercel.app/).

## Ferramentas utilizadas:

* React
* TypeScript
* Recoil
* JSON server

## Iniciando o projeto na sua máquina

- Clone o repositório através do terminal:
    - git clone *link do repositório*
    - cd *pasta do repositório*
 
- Entre na pasta do projeto:
    - cd *nome da pasta*
 
- Rode o código na sua máquina:
    - npm install (para instalar as dependências do projeto)
    - npm start (para abrir o projeto no seu navegador)
 
- Para iniciar a API siga os passos de instalação e inicialização do [JSON server](https://github.com/typicode/json-server#getting-started)
 
* Caso o projeto não abra automaticamente, digite http://localhost:3000 no seu navegador
* Caso o JSON server rode na mesma porta do projeto, digite *npx json-server db.json -p outroNúmeroDePorta* no terminal para alterar a porta do JSON server.
