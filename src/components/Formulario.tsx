
const Formulario = () => {
    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email"
                    className="form-control"
                    name="email"
                />
            </div>
        </form>
    )
}

export default Formulario