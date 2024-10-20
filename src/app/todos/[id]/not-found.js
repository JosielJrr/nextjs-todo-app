import Link from "next/link";

const TodoNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Tarefa não encontrada
            </h1>
            <Link href="/"
                className="text-blue-500 hover:underline">
                Voltar para Home
            </Link>
        </div>
    );
}

export default TodoNotFound;
