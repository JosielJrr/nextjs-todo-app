"use client";
import { updateTodo } from "@/action";
import { useFormState } from "react-dom";

const TodoForm = ({ todo }) => {
    // Usa o hook useFormState, passando a função updateTodo para ser chamada na submissão do formulário.
    // O segundo argumento inicializa o estado com uma propriedade "errors" vazia.
    const [formState, action] = useFormState(updateTodo, { errors: "" });

    return (
        <form
            action={action} // A ação do formulário é a função que será chamada na submissão.
            className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">

            <input type="hidden" name="id" value={todo.id} /> {/* ID da tarefa é enviado ocultamente no formulário. */}

            {/* Exibe mensagens de erro se existirem, proveniente do estado do formulário. */}
            {formState.errors ? (
                <div className="my-4 p-2 bg-red-400 border border-red-600 rounded-md">
                    {formState.errors} {/* Mensagem de erro exibida para o usuário. */}
                </div>
            ) : ""}

            <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-700">
                Título
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Insira o título"
                    required // Campo obrigatório para envio do formulário.
                    className="mt-1 px-4 border py-2 border-gray-300 rounded-md w-full"
                    // Define o valor padrão como o título da tarefa atual
                    defaultValue={todo.titulo} />
            </label>

            <label
                htmlFor="descricao"
                className="block text-sm font-medium text-gray-700">
                Descrição
                <textarea
                    type="text"
                    id="descricao"
                    name="descricao"
                    placeholder="Insira a tarefa"
                    required // Campo obrigatório para envio do formulário.
                    className="mt-1 px-4 border py-2 border-gray-300 rounded-md w-full h-32"
                    // Define o valor padrão como a descrição da tarefa atual
                    defaultValue={todo.descricao}>
                </textarea>
            </label>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Atualizar Tarefa
            </button>
        </form>
    );
}

export default TodoForm;
