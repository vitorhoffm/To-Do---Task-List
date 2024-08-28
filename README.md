# TaskList - Projeto de Gerenciamento de Tarefas

Este projeto é uma aplicação de gerenciamento de tarefas que utiliza várias tecnologias modernas para proporcionar uma experiência de usuário fluida e uma estrutura de backend segura. Abaixo estão as instruções para configurar e executar o projeto.

## Tecnologias Utilizadas

- **Frontend:**
  - **React** com **Styled Components**: Utilizado para criar uma interface de usuário dinâmica e estilizada, sem a necessidade de CSS puro.
  - **Context API**: Usado para gerenciar o estado global da autenticação e armazenar o token de autenticação.

- **Backend:**
  - **NestJS**: Framework para construir a API RESTful com funcionalidades avançadas.
  - **JWT (JSON Web Token)**: Usado para autenticação segura.
  - **SQLite**: Banco de dados leve utilizado para armazenar os dados das tarefas.

## Instalação e Execução

### Pré-requisitos

Certifique-se de ter o Node.js e npm (Node Package Manager) instalados em seu sistema. Você pode verificar isso com os seguintes comandos:

```bash
node -v
npm -v
```

Instale o pnpm para executar o backend: https://pnpm.io/installation
Após a instalação você pode verificar se está instalado instalado o pnpm em sua maquina executando o seguinte comando:

```bash
pnpm -v
```

#### Instalação

- execução do frontend
entre no diretorio do frontend e instale as dependencia executando o seguinte comando:

```bash
npm i
```
após instalar as depedencias basta executar com o seguinte comando: 

```bash
npm start
```

- execução do backend
entre no diretorio do frontend e instale as dependencia executando o seguinte comando:

```bash
npm i
```
após instalar as depedencias basta executar com o seguinte comando: 

```bash
pnpm start:dev
```
