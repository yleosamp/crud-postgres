# CRUD API em PostgreSQL

PostgreSQL é um dos principais bancos relacionais, que utiliza a linguagem SQL. Com isso, decidi estudar as funcionalidades do Postgres e desenvolver um CRUD simples.

## Funcionalidades simples

Esta API CRUD conta com algumas funcionalidades simples, seguindo o CRUD.

- Registro de um usuário com nome, idade, data de nascimento e apelido.
- Data de nascimento pode ser enviada no padrão brasileiro, utilizando traços. Ex: 07-09-2005.
- Listar todos os usuários registrados no banco de dados.
- Atualizar informações de um usuário com base no ID.
- Deletar um usuário inteiro com base no ID.

## Rotas disponíveis

```/api/list``` **GET** - Rota responsável por listar todos os usuário registrados no banco
```/api/register``` **POST** - Rota responsável por registrar um usuário novo. Campos aceitos no registro:
```json
"nome": "String",
"idade": number,
"data": "DD-MM-YYYY",
"apelido": "String"
```
```/api/edit``` **PATCH** - Esta rota aceita os mesmos campos que a de registro(acima), porém com adição do campo ```"id": number```. Este ID deverá ser o do usuário a ser editado.

```/api/delete``` **DELETE** - Rota que aceita o ID do usuário a ser deletado.

# SETUP - Iniciar o servidor

Para preparar a API, deve-se digitar no terminal o comando ```npm i```, isso fará com que todas as dependências do projeto sejam instaladas para que o projeto possa rodar corretamente.
Após instalar as dependências, digite o comando ```npm run dev``` para rodar o servidor.
Agora, o servidor está pronto para rodar e ser utilizado corretamente.