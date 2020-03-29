const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
// app.listen(3333);
/*
Metodos HTTP
GET: Buscar/Listar informação no backend
POST: Criar informação no backend
PUT: Alterar informação no backend
DELETE: Deletar informação no backend
*/

/*
Tipos de Parametros
Query Params: Parametros nomeados, enviados na rota após "?" (Filtros, paginacao)
Route Params: Parametros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/*
SQL: MySQL, SQLite
NoSQL: MongoDB, CouchDB, etc
*/

/*
Driver: SELECT * FROM users
Query Builder: table('users').select(*).where() 
*/
 

