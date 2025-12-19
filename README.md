# user-management-api
API REST de Gerenciamento de Usuários desenvolvida para desafio técnico. Focada em boas práticas de organização, TypeScript e manipulação de dados em memória.



# Desafio Técnico: API de Usuários 🚀

Esta API foi desenvolvida como parte de um desafio técnico para o cargo de Desenvolvedor Backend Júnior. O objetivo é gerenciar usuários através de operações REST.

## 🛠 Tecnologias Utilizadas
- **Node.js** & **Express**: Framework base.
- **TypeScript**: Tipagem estática para maior segurança.
- **Nodemon / Ts-node-dev**: Ambiente de desenvolvimento.

## 📂 Arquitetura do Projeto
A estrutura foi organizada seguindo o padrão de separação de responsabilidades:
- `src/models`: Definição de interfaces e tipos.
- `src/controllers`: Lógica de recebimento das requisições.
- `src/routes`: Definição dos endpoints.
- `src/database`: Armazenamento em memória (array de usuários).

## 📌 Endpoints
- **GET** `/users`: Retorna a lista completa de usuários.
- **POST** `/users`: Cadastra um novo usuário. 
  - *Body esperado:* `{ "nome": "String", "email": "String" }`

## 💡 Decisões Técnicas
- Implementada busca por e-mail para evitar duplicidade de cadastro.
- Tratamento de espaços e letras (case-insensitive) nas buscas de e-mail.
- Utilização de `req.body` com desestruturação para clareza do código.
