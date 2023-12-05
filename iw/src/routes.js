import express from 'express';
//Importa o modulo expresss

const router = express.Router();
//Cria a constante Router

import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);
//Define rotas usando os metodos HTTP
export { router as default};
//eporta o modulo router