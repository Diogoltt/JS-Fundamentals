import { useState } from "react";
import "./Contador.css";

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(valorAtual => valorAtual + 1);
    };

    const zerar = () => {
        setContador(0);
    };

    return (
        <>
            <h1>Exercício 1: </h1>
            <h3>Contador: {contador}</h3>
            <div className="contador-buttons">
                <button onClick={zerar}> Zerar </button>
                <button onClick={incrementar}> Incrementar </button>
            </div>

            <h1>---------------</h1>
            <h1>Exercício 2: </h1>
        </>
    );
}

export default Contador;