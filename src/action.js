"use server";
import { revalidatePath } from "next/cache";
import { db } from "./db";
import { redirect } from "next/navigation";

// Função para adicionar uma tarefa (Todo) no banco de dados
export const addTodo = async (formData) => {
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");

    // Cria uma nova entrada de 'todo' no banco de dados usando os dados obtidos
    await db.todo.create({
        data: {
            titulo, // Adiciona o título ao novo 'todo'
            descricao, // Adiciona a descrição ao novo 'todo'
        },
    });

    // Atualiza a rota para refletir as novas informações
    revalidatePath("/");

    redirect("/"); // Redireciona o usuário para a página inicial após a criação
}

// Função para deletar uma tarefa (Todo) no banco de dados
export const deleteTodo = async (formData) => {
    const id = Number(formData.get("id")); // Obtém o ID da tarefa a ser deletada do FormData

    // Deleta a tarefa do banco de dados com base no ID
    await db.todo.delete({
        where: { id },
    });

    // Atualiza a rota para refletir as novas informações
    revalidatePath("/");

    redirect("/");   // Redireciona o usuário para a página inicial após a exclusão
}

// Função  para buscar uma tarefa (Todo) no banco de dados
export const findTodoById = async (id) => {

    // throw new Error("Ops!")  // Gera um erro intencionalmente e para a execução do programa (simulação do uso do error.js)

    // Busca a primeira tarefa no banco de dados que corresponda ao ID fornecido
    const todo = db.todo.findFirst({
        where: { id },  // Filtro baseado no ID
    });

    return todo;  // Retorna a tarefa encontrada
};

// Função que atualiza uma tarefa (todo) com base no formData e no formState
export const updateTodo = async (formState, formData) => {
    const id = Number(formData.get("id")); // Extrai e converte o ID da tarefa a ser atualizada
    const titulo = formData.get("titulo"); // Extrai o título da tarefa do formData
    const descricao = formData.get("descricao"); // Extrai a descrição da tarefa do formData

    try {
        // throw new Error("Falha ao salvar dados, sistema offline!");   // Simula um erro que ocorre ao tentar salvar dados

        // Validação: verifica se o título tem pelo menos 5 caracteres
        if (titulo.length < 5) {
            return {
                errors: "O título precisa de pelo menos 3 caracteres.",
            };
        }

        // Validação: verifica se a descrição tem pelo menos 10 caracteres
        if (descricao.length < 10) {
            return {
                errors: "A descrição precisa de pelo menos 10 caracteres",
            };
        }

        // Atualiza a tarefa no banco de dados com base no ID e nos novos dados (título e descrição)
        await db.todo.update({
            where: { id }, // Condição para encontrar a tarefa correta no banco de dados
            data: {
                titulo, // Atualiza o campo 'título'
                descricao, // Atualiza o campo 'descrição'
            },
        });

    } catch (error) {
        // Captura qualquer erro que ocorreu no bloco try
        return {
            errors: error.message, // Retorna a mensagem de erro para o usuário
        };
    }

    // Atualiza a rota para refletir as novas informações
    revalidatePath("/");

    // Redireciona o usuário de volta à página principal após a atualização bem-sucedida
    redirect("/");
};

export const toggleTodoStatus = async (formData) => {
    // Extrai o ID do todo do FormData
    const todoId = Number(formData.get("id"));

    // Busca o todo correspondente no banco de dados
    const todo = await db.todo.findFirst({
        where: { id: todoId },
    });

    // Verifica se o todo existe, caso contrário, lança um erro
    if (!todo) {
        throw new Error("Todo não existe!");
    }

    // Alterna o status do todo
    const novoStatus = todo.status === "pendente" ? "completa" : "pendente";

    // Atualiza o status do todo no banco de dados
    await db.todo.update({
        where: {
            id: todoId,
        },
        data: {
            status: novoStatus,
        },
    });

    // Revalida a rota para atualizar a interface
    revalidatePath("/");

    // Redireciona para a página inicial
    redirect("/");
};
