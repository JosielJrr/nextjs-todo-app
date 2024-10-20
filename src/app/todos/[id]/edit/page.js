import { findTodoById } from "@/action";
import TodoForm from "@/components/TodoForm";

const TodoEdit = async ({ params }) => {
    const id = Number(params.id); // Converte o ID da URL em número

    // Busca a tarefa no banco de dados com base no ID da URL
    const todo = await findTodoById(id);

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">
                Editando: {todo.titulo}
            </h1>
            <TodoForm todo={todo} />
        </div>
    )
}

export default TodoEdit;
