import { useState } from "react"


const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = (numero: number): void => {
        setCounter(counter + numero);
    }

    return (
        <>
            <h3>Counter:</h3>
            <span>valor: {counter}</span>
            <br />
            <button onClick={() => incrementar(1)} className="btn btn-outline-primary mt-2">
                +1
            </button>
            <button onClick={() => incrementar(2)} className="btn btn-outline-primary mt-2">
                +2
            </button>
            <button onClick={() => setCounter(0)} className="btn btn-outline-danger mt-2">
                Reset
            </button>
        </>
    )
}

export default Counter;