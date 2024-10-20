import { db } from "@/db";
import { notFound } from "next/navigation";

const TodoShow = async ({ params }) => {
    // Simula carregamento com arquivo loading.js
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Aguardar 2 segundos antes de continuar a execução

    const id = Number(params.id); // Converte o ID recebido dos parâmetros de string para número.

    // Consulta ao banco para encontrar a primeira tarefa (todo) pelo ID especificado, usando o método findFirst.
    const todo = await db.todo.findFirst({
        where: { id },
    });


    // Verifica se a tarefa foi encontrada
    if (!todo) return notFound(); // Se não encontrada, retorna a resposta de "não encontrado" ou arquivo not-found.js

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {todo.titulo}
                </h1>
                <p className="text-gray-600">
                    {todo.descricao}
                </p>
            </div>
        </div>
    );
};

export default TodoShow;
