
const CheckOutForm = ({dataForm, fieldError, fieldStatus, handleChange})=>{

    return(
        <form className="formulario">
            <div className="etiqueta">
                <label > Nombre: </label>
                <input className="inputs" type="text" name="nombre" value={dataForm.nombre} onChange={handleChange}  placeholder={"Ingrese su Nombre"} required={true} disabled={fieldStatus} />
                <p style={{ color: fieldError.nombre ? "red" : "blue" }}> { fieldError.nombre ? fieldError.message : 'No se aceptan signos de puntuacion ni caracteres especiales.'} </p>
            </div>
            <div className="etiqueta">
                <label> Apellido: </label>
                <input className="inputs" type="text" name="apellido" value={dataForm.apellido} onChange={handleChange} placeholder={"Ingrese su Apellido"} required={true} disabled={fieldStatus}/>                
                <p  style={{ color: fieldError.apellido ? "red" : "blue" }}> { fieldError.apellido ? fieldError.message : 'No se aceptan signos de puntuacion ni caracteres especiales.'} </p>
            </div>
            <div className="etiqueta">
                <label> Telefono: </label>
                <input className="inputs" type="text" name="telefono" value={dataForm.telefono} onChange={handleChange} placeholder={"Ingrese su numero de Telefono"} required={true} disabled={fieldStatus}/>
                <p style={{ color: fieldError.telefono ? "red" : "blue" }}> { fieldError.telefono ? fieldError.message : 'Ingrese el numero sin el prefijo " + " .'} </p>
            </div>
            <div className="etiqueta">
                <label> Email: </label>
                <input className="inputs" type="text" name="email" value={dataForm.email} onChange={handleChange}  placeholder={"example@example.com"} required={true} disabled={fieldStatus}/>
                <p  style={{ color: fieldError.email ? "red" : "blue" }}> { fieldError.email ? fieldError.message : 'No se aceptan espacios ni caracteres especiales.'} </p>
            </div>
            <div className="etiqueta">
                <label > Confirme su Email: </label>
                <input className="inputs" type="text" name="confirmedEmail" value={dataForm.confirmedEmail} onChange={handleChange} placeholder={"example@example.com"}required={true} disabled={fieldStatus}/>
                <p  style={{ color: fieldError.confirmedEmail ? "red" : "blue" }}> { fieldError.confirmedEmail ? fieldError.message : 'No se aceptan espacios ni caracteres especiales.'} </p>                
            </div>
        </form>
    )
}
export default CheckOutForm