AstroNotes - Observações Astronômicas
AstroNotes é um sistema web para armazenar e gerenciar observações astronômicas, permitindo aos usuários registrar detalhes como título, descrição, data, localização, tipo de evento, e imagens das observações feitas.

Tecnologias Utilizadas
Node.js: Plataforma de execução para JavaScript no servidor.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Express: Framework minimalista para criação de APIs RESTful.
TypeORM: ORM para interação com bancos de dados relacionais (PostgreSQL).
PostgreSQL: Banco de dados relacional usado para armazenar as observações.

Comunicação e Fluxo de Dados
Cliente (ex: Insomnia ou frontend) envia uma requisição HTTP (por exemplo, POST /api/usuarios).
O Express recebe essa requisição e a encaminha para a rota correta (definida em usuarioRoutes.ts ou observacaoRoutes.ts).
A rota chama o controller correspondente (ex: UsuarioController).
O controller valida os dados e chama o service (ex: UsuarioServico).
O service interage com o banco de dados (por meio do repository do TypeORM) para executar a ação solicitada (criar, ler, atualizar ou excluir dados).
O service retorna os dados ou o status da operação para o controller.
O controller envia a resposta de volta para o cliente.
Resumo das Interações
client -> express.js (route) -> controller -> service -> TypeORM (repository) -> database -> service -> controller -> express.js -> client
Como as partes se conectam:
Express gerencia as requisições e responde aos clientes.
Routes mapeiam as requisições HTTP para os controllers.
Controllers processam as requisições e interagem com os services.
Services contêm a lógica de negócios e interagem com o banco de dados via TypeORM repositories.
TypeORM é usado para facilitar a interação com o banco de dados, que armazena os dados de forma persistente.


Estrutura do Projeto:
1. Controllers
Responsáveis por receber as requisições HTTP, processá-las e retornar as respostas adequadas.
Exemplo: UsuarioController e ObservacaoController.

2. Routes
Define os caminhos das APIs e mapeia as rotas para os controllers.
Exemplo: usuarioRoutes.ts e observacaoRoutes.ts.

3. Services
Contém a lógica de negócios que interage com o banco de dados.
Exemplo: UsuarioService e ObservacaoService.

4. Entities
Define as tabelas do banco de dados com a utilização do TypeORM. Cada classe representa uma tabela.
Exemplo: Usuario e Observacao.

5. Database (AppDataSource)
Configuração e inicialização da conexão com o banco de dados, usando o TypeORM.

6. Server
O ponto de entrada da aplicação. Configura o servidor Express, inicializa o banco de dados e define as rotas.


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

Contribuição
Sinta-se à vontade para fazer fork e enviar pull requests. Qualquer contribuição é bem-vinda!

Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.