// require('dotenv').config({path:'config.env'});

import express from 'express';
//Importa o modulo express
import cors from 'cors';

import routes from './routes.js';
//Importa o arquivo routes.js

const server = express();
//Cria uma instancia no servidor express

server.use(cors());
/*Aplica o middleware corsao servidor Express para 
lidar com a política de mesma origem e permitir transferências de diferentes origens.*/
express.urlencoded({extended:true});
//Analisas dados do corpo de requisições
server.use('/api', routes);
//Define o caminho base '/api' para todas as rotas definidas no arquivo routes.js.
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
})
// Inicia o servidor na porta 3000