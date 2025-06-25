## Lista de Tarefas (Todo)

Aplicação simples de Lista de Tarefas construída com [Next.js](https://nextjs.org/) e banco de dados local (SQLite). Permite adicionar, visualizar, editar, excluir e alternar o status das tarefas entre pendente e completa.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **Prisma**: ORM para gerenciamento do banco de dados.
- **SQLite**: Banco de dados leve, armazenado localmente.
- **Tailwind CSS**: Framework CSS para estilização responsiva.

## Instalação e Uso

1. Clone o repositório:
   ```bash
   git clone https://github.com/JosielJrr/nextjs-todo-app.git
   cd nextjs-todo-app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```ini
   DATABASE_URL="file:./dev.db"
   ```
Isso garante que o Prisma consiga acessar o banco SQLite local para rodar a aplicação.

> Este projeto foi desenvolvido no curso **Curso de Next.js do básico ao avançado com projetos** do [Hora de Codar](https://app.horadecodar.com.br/).
