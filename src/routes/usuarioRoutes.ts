// src/routes/userRoutes.ts
import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";

const usuarioController = new UsuarioController();

const rota = Router();

rota.post("/usuarios", usuarioController.criarUsuario); // Cria usuário
rota.get("/usuarios/:id", usuarioController.pegarUsuario); // Busca um usuário pelo id
rota.put("/usuarios/:id", usuarioController.editarUsuario); // Atualiza usuário
rota.delete("/usuarios/:id", usuarioController.deletarUsuario); // Deleta usuário

export default rota;

//Express - facilita na criação de rotas, ele quem define as rotas, além de gerenciar as requisições que chegam, 
// e enviar respostas para o cliente.

