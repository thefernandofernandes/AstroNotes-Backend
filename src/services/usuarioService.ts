// src/services/userService.ts
import { Usuario } from "../entities/Usuario";
import { AppDataSource } from "../database/data-source";

export class UsuarioServico {
    static async criarUsuario(usuarioData: any) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const usuario = usuarioRepository.create(usuarioData);
        await usuarioRepository.save(usuario);
        return usuario;
    }

    static async pegarUsuario(id: number) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        return await usuarioRepository.findOne({ where: { id } });
    }

    static async editarUsuario(id: number, usuarioData: any) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const usuario = await usuarioRepository.findOne({ where: { id } });
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }
        Object.assign(usuario, usuarioData);
        await usuarioRepository.save(usuario);
        return usuario;
    }

    static async deletarUsuario(id: number) {
        const usuarioRepository = AppDataSource.getRepository(Usuario);
        const usuario = await usuarioRepository.findOne({ where: { id } });
        if (!usuario) {
            throw new Error("User not found");
        }
        await usuarioRepository.remove(usuario);
    }
}
