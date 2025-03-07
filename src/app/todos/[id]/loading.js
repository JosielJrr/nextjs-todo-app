const LoadingTodo = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                    Carregando dados...
                </p>
            </div>
        </div>
    );
}

export default LoadingTodo;
