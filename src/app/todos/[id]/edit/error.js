"use client"
import Link from 'next/link';

const TodoEditErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
                Ocorreu um problema, tente novamente mais tarde!
            </h1>
            <Link href="/" className="text-blue-500 hover:underline">
                Voltar para Home
            </Link>
        </div>
    )
}

export default TodoEditErrorPage;
