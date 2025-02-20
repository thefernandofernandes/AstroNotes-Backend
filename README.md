

Como Rodar o Projeto
1. Instalação de Dependências
Primeiro, clone o repositório e instale as dependências com:

bash
Copiar
Editar
git clone <url-do-repositorio>
cd <diretorio-do-projeto>
npm install
2. Configuração do Banco de Dados
Certifique-se de que o PostgreSQL esteja instalado e em execução. O projeto utiliza o TypeORM para conectar ao banco de dados.

3. Rodar o Projeto
Para rodar a aplicação em desenvolvimento, execute:

bash
Copiar
Editar
npm run dev
O servidor estará rodando na porta 5000.

Endpoints
Usuários
POST /api/usuarios: Cria um novo usuário.
GET /api/usuarios/:id: Obtém informações de um usuário pelo ID.
PUT /api/usuarios/:id: Atualiza informações de um usuário pelo ID.
DELETE /api/usuarios/:id: Deleta um usuário pelo ID.
Observações
POST /api/observacoes: Cria uma nova observação astronômica (com upload de imagem).
GET /api/observacoes/:id: Obtém informações de uma observação pelo ID.
GET /api/observacoes: Lista todas as observações.
PUT /api/observacoes/:id: Atualiza uma observação.
DELETE /api/observacoes/:id: Deleta uma observação.

Como Testar
Você pode testar a API utilizando o Insomnia ou Postman para fazer as requisições HTTP.

