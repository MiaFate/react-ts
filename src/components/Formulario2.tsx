import { useForm } from "../hooks/useForm"


const Formulario2 = () => {

    const { postal, ciudad, formulario, handleChange } = useForm({
        postal: 'ABC',
        ciudad: 'Otawa'
    });

    // const { postal, ciudad } = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Codigo Postal</label>
                <input type="text"
                    className="form-control"
                    name="postal"
                    value={postal}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input type="text"
                    className="form-control"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}

export default Formulario2