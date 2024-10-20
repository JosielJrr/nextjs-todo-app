"use client"; // Indica que este componente deve ser renderizado no lado do cliente

const Checkbox = ({ checked }) => {
    return (
        <input
            type="checkbox"
            checked={checked} // Controla se o checkbox está marcado ou não
            className="w-5"
            onChange={(e) => e.target.form.requestSubmit()} // Submete o formulário ao alterar o checkbox
        />
    );
}

export default Checkbox; 
