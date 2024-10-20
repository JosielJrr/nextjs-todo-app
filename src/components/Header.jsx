import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <Link href="/"
                    className="hover:text-black">
                    Lista de Tarefas
                </Link>
                <Link href="/todos/create"
                    className="hover:text-black">
                    Criar Tarefa
                </Link>
            </nav>
        </header>
    )
}

export default Header;