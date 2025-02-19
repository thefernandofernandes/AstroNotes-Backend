import { Observacao } from "../entities/Observacao";
import { Usuario } from "../entities/Usuario";
import { AppDataSource } from "../database/data-source";

export class ObservacaoServico {
    // Criar uma observação associada a um usuário específico
    static async criarObservacao(observacaoData: any) {
        const observacaoRepository = AppDataSource.getRepository(Observacao);
        const usuarioRepository = AppDataSource.getRepository(Usuario);

        // Verifica se o usuário existe
        const usuario = await usuarioRepository.findOne({ where: { id: observacaoData.usuarioId } });
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        // Cria e salva a observação
        const observacao = observacaoRepository.create({ ...observacaoData, usuario });
        await observacaoRepository.save(observacao);
        return observacao;
    }

    // Buscar uma observação específica por ID e garantir que pertence a um usuário
    static async pegarObservacao(id: number, usuarioId: number) {
        const observacaoRepository = AppDataSource.getRepository(Observacao);
        const observacao = await observacaoRepository.findOne({ where: { id, usuario: { id: usuarioId } }, relations: ["usuario"] });

        if (!observacao) {
            throw new Error("Observação não encontrada ou não pertence ao usuário.");
        }

        return observacao;
    }

    // Editar uma observação, garantindo que pertence ao usuário
    static async editarObservacao(id: number, usuarioId: number, observacaoData: any) {
        const observacaoRepository = AppDataSource.getRepository(Observacao);
        const observacao = await observacaoRepository.findOne({ where: { id, usuario: { id: usuarioId } } });

        if (!observacao) {
            throw new Error("Observação não encontrada ou não pertence ao usuário.");
        }

        Object.assign(observacao, observacaoData);
        await observacaoRepository.save(observacao);
        return observacao;
    }

    // Deletar uma observação, garantindo que pertence ao usuário
    static async deletarObservacao(id: number, usuarioId: number) {
        const observacaoRepository = AppDataSource.getRepository(Observacao);
        const observacao = await observacaoRepository.findOne({ where: { id, usuario: { id: usuarioId } } });

        if (!observacao) {
            throw new Error("Observação não encontrada ou não pertence ao usuário.");
        }

        await observacaoRepository.remove(observacao);
    }

    // Buscar todas as observações de um usuário específico
    static async listarObservacoesDoUsuario(usuarioId: number) {
        const observacaoRepository = AppDataSource.getRepository(Observacao);
        return await observacaoRepository.find({ where: { usuario: { id: usuarioId } }, relations: ["usuario"] });
    }
}
