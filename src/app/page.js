import Button from "@/components/Button";
import { db } from "@/db";
import Link from "next/link";
import { deleteTodo, toggleTodoStatus } from "@/action";
import Checkbox from "@/components/Checkbox";

// export const revalidate = 5; //Regenera a página a cada 5 segundos

// export const dynamic = "force-dynamic" // Força a renderização dinâmica sem cache

export default async function Home() {

  // Busca todos os registros de 'todo' no banco de dados
  const todos = await db.todo.findMany(); // Recupera uma lista de todos os 'todos' armazenados

  return (
    <>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tarefas!</h1>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div key={todo.id}
              className={`bg-gray-100 p-4 rounded-lg shadow 
              ${todo.status === "completa" ? "bg-green-100" : ""}`}>
              <div className="flex justify-between items-start">
                {/* Título e descrição da tarefa */}
                <div>
                  <h2 className="text-xl font-semibold">{todo.titulo}</h2>
                  <p>{todo.descricao}</p>
                </div>

                {/* Formulário de status e checkbox */}
                <div className="flex flex-col items-start gap-2">
                  <form action={toggleTodoStatus} className="flex items-center gap-2">
                    <input type="hidden" name="id" value={todo.id} />
                    <p className="italic">Completar?</p>
                    <Checkbox checked={todo.status === "completa"} />
                  </form>
                </div>
              </div>
              
              {/* Links e Botão */}
              <div className="flex space-x-2 mt-4">
                <Link
                  href={`/todos/${todo.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Visualizar
                </Link>
                <Link
                  href={`/todos/${todo.id}/edit`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </Link>
                <form action={deleteTodo}>
                  {/* Input oculto que armazena o ID da tarefa a ser deletada */}
                  <input type="hidden" name="id" value={todo.id} />

                  {/* Botão de exclusão */}
                  <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Excluir
                  </Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
