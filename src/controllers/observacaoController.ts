import { Request, Response } from "express";
import { ObservacaoServico } from "../services/observacaoService";

export class ObservacaoController {
    async criarObservacao(req: Request, res: Response) {
        try {
            const observacao = await ObservacaoServico.criarObservacao(req.body);
            res.status(201).json(observacao);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async pegarObservacao(req: Request, res: Response) {
        try {
            const observacao = await ObservacaoServico.pegarObservacao(
                parseInt(req.params.id),
                parseInt(req.params.usuarioId)
            );
            if (observacao) {
                res.status(200).json(observacao);
            } else {
                res.status(404).json({ message: "Observação não encontrada" });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async editarObservacao(req: Request, res: Response) {
        try {
            const observacao = await ObservacaoServico.editarObservacao(
                parseInt(req.params.id),
                parseInt(req.params.usuarioId),
                req.body
            );
            res.status(200).json(observacao);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async deletarObservacao(req: Request, res: Response) {
        try {
            await ObservacaoServico.deletarObservacao(
                parseInt(req.params.id),
                parseInt(req.params.usuarioId)
            );
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async listarObservacoesDoUsuario(req: Request, res: Response) {
        try {
            const observacoes = await ObservacaoServico.listarObservacoesDoUsuario(parseInt(req.params.usuarioId));
            res.status(200).json(observacoes);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }
}
