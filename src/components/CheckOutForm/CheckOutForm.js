import { registerVersion } from "firebase/app";
import { useState } from "react"
const CheckOutForm = ({input})=>{

    const [ dataForm , setDataForm ] = useState({ nombre: '', apellido:'', tel: '' , email: '' , confirmedEmail:'' })
    const [ emailConfirm, setEmailConfirm ] = useState()
    function handleChange(evt) {
        const value = evt.target.value;
        const Name = evt.target.name;
        switch(Name){
            case 'nombre': 
                (value != "" && isNaN(value) ) ? setDataForm({ ...dataForm, [evt.target.name]: value }) : console.log("ingrese letras sin espacios")
                break;
            case 'apellido': 
                (value != "" && isNaN(value) ) ? setDataForm({ ...dataForm, [evt.target.name]: value }) : console.log("ingrese letras sin espacios")
                break;
            case 'tel': 
                ( !isNaN(value) ) ? setDataForm({ ...dataForm, [evt.target.name]: value }) : console.log("ingrese solo numeros sin espacios")
                break;
            case 'email': 
                (value != "" && isNaN(value) ) ? setDataForm({ ...dataForm, [evt.target.name]: value }) : console.log("ingrese letras y numeros sin espacios")
                break;
            case 'reEmail': 
                (value === dataForm.email ) ? console.log("recimo el remail")  : console.log("Las direcciones de correo no cinciden")
            break;
        }
    }
    
    /*
    
const newDataForm = Object.assign ({},dataForm)

const {nombre, ape , tele, dirmail }= newDataForm
    if(dataCorrect){
        
        input({ ...newDataForm})

        setDataCorrect(false)

    }*/
    return(
        <div>
            <form className="formulario">
                <div className="etiqueta">
                    <label > Nombre: </label>
                    <input type="text" name="nombre" value={dataForm.nombre} onChange={handleChange}  placeholder={"Ingrese su Nombre"} required={true}/>
                </div>
                <div className="etiqueta">
                    <label> Apellido: </label>
                    <input type="text" name="apellido" value={dataForm.apellido} onChange={handleChange} placeholder={"Ingrese su Apellido"} required={true}/>
                </div>
                <div className="etiqueta">
                    <label> Telefono: </label>
                    <input type="text" name="tel" value={dataForm.tel} onChange={handleChange} placeholder={"Ingrese su Telefono"} required={true}/>
                </div>
                <div className="etiqueta">
                    <label> Email: </label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChange}  placeholder={"Ingrese su Email"} required={true}/>
                </div>
                <div className="etiqueta">
                    <label > Confirme su Email: </label>
                    <input type="email" name="reEmail" value={emailConfirm} onChange={handleChange} placeholder={"Ingrese su Email"}required={true} />
                </div>
                
            </form>
            <div className="etiqueta">
                <label > Los datos ingresados son correctos: </label> 
                <button onClick={()=>input(dataForm)}> Aceptar </button>
            </div>
        </div>
    )
}
export default CheckOutForm