import { Router } from "express";
import { ObservacaoController } from "../controllers/observacaoController";

const observacaoController = new ObservacaoController();

const rota = Router();

// Criar uma nova observação associada a um usuário
rota.post("/observacoes", observacaoController.criarObservacao);

// Buscar uma observação específica por ID (precisa do ID da observação e do usuário)
rota.get("/observacoes/:id/:usuarioId", observacaoController.pegarObservacao);

// Atualizar uma observação (precisa do ID da observação e do usuário)
rota.put("/observacoes/:id/:usuarioId", observacaoController.editarObservacao);

// Deletar uma observação (precisa do ID da observação e do usuário)
rota.delete("/observacoes/:id/:usuarioId", observacaoController.deletarObservacao);

// Listar todas as observações de um usuário específico
rota.get("/usuarios/:usuarioId/observacoes", observacaoController.listarObservacoesDoUsuario);

export default rota;
