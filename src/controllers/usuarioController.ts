import { Request, Response } from "express";
import { UsuarioServico } from "../services/usuarioService";

export class UsuarioController {
    async criarUsuario(req: Request, res: Response) {
        try {
            const usuario = await UsuarioServico.criarUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async pegarUsuario(req: Request, res: Response) {
        try {
            const usuario = await UsuarioServico.pegarUsuario(parseInt(req.params.id));
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async editarUsuario(req: Request, res: Response) {
        try {
            const usuario = await UsuarioServico.editarUsuario(parseInt(req.params.id), req.body);
            res.status(200).json(usuario);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }

    async deletarUsuario(req: Request, res: Response) {
        try {
            await UsuarioServico.deletarUsuario(parseInt(req.params.id));
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: "Erro desconhecido" });
            }
        }
    }
}
