import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import usuarioRotas from "./routes/usuarioRoutes"; // Importar as rotas de usuário
import observacoesRotas from "./routes/observacaoRoutes"; // Importar as rotas de observação

const app = express();

app.use(express.json()); // Para tratar o corpo das requisições JSON

// Conectar ao banco de dados
AppDataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados");

        // Usar as rotas de usuários
        app.use("/api/", usuarioRotas); // Rota para usuários

        // Usar as rotas de observações
        app.use("/api/", observacoesRotas); // Rota para observações

        app.listen(5000, () => {
            console.log("Servidor rodando na porta 5000");
        });
    })
    .catch((error) => console.log("Erro ao conectar ao banco: ", error));

