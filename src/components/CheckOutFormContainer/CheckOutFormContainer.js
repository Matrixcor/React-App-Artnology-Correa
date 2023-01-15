import CheckOutForm from "../CheckOutForm/CheckOutForm";
import {useContext, useState } from "react"
import {CartContext} from "../Context/CartContext"

const CheckOutFormContainer = ({input, estadoPasosCompra , setEstadoPasosCompra})=>{
    const { msgAlert } = useContext(CartContext)
    const [ dataForm , setDataForm ] = useState({nombre: '', apellido:'', telefono: '' , email: '' , confirmedEmail:''})
    const [ fieldError, setFieldError ] = useState({})
    const [ fieldStatus , setFieldStatus ] = useState(false)

    const emailRegexOf = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]");
    const nombYapeRegex = new RegExp ("^[a-zA-Z]+$")

    const handleDataAssign = (name, value)=>{
        setDataForm({ ...dataForm, [name]: value })
        setFieldError({ [name]:false})
    }
    
    const handleChange = (evt)=> {
        const value = evt.target.value;
        const name = evt.target.name;
        switch(name){ // valido los datos cuando ingreso por teclado
            case 'nombre': 
                (nombYapeRegex.test(value) ? handleDataAssign(name,value) : setFieldError({ [evt.target.name]:true, message:"Ingrese un nombre valido"}))
                break;
            case 'apellido': 
                (nombYapeRegex.test(value) ? handleDataAssign(name,value) : setFieldError({ [evt.target.name]:true, message:'Ingrese un apellido valido'}))
                break;
            case 'telefono': 
                ( (!isNaN(value) && value !== ' ')  ? handleDataAssign(name,value) : setFieldError({ [evt.target.name]:true, message:'Ingrese solo numeros sin espacios'}))
                break;
            case 'email': 
                ( (isNaN(value) && value !== ' ')  ? handleDataAssign(name,value) : setFieldError({ [evt.target.name]:true, message:'Ingrese letras y numeros sin espacios'}))
                break;
            case 'confirmedEmail': 
                ( (value !== ' ' && isNaN(value) ) ? handleDataAssign(name,value) : setFieldError({[evt.target.name]:true, message:'Ingrese letras y numeros sin espacios'}))
                break;
            }
    }
    
    const validaremail = ()=> {
        if ((emailRegexOf.test(dataForm.email)) && (emailRegexOf.test(dataForm.confirmedEmail)) ) {
            if( dataForm.email === dataForm.confirmedEmail ){
                setFieldError({ confirmedEmail:false , email: false})
                setEstadoPasosCompra({...estadoPasosCompra, dataOk: true})
                setFieldStatus(true)
                input(dataForm)
            }else{
                setFieldError({ confirmedEmail:true, email:true,  message:'Las direcciones de emails no coinciden.'})
            }
        }
    }
    return(
        <div>
            <CheckOutForm handleChange={handleChange} dataForm={dataForm} fieldError={fieldError} fieldStatus={fieldStatus}/>
            <div className="etiqueta">
                <button className="BotonFin" onClick={()=>validaremail(dataForm)} style={{ visibility: fieldStatus ? "hidden" : "visible" }}> Siguiente </button>        
            </div>
        </div>
    )
}
export default CheckOutFormContainer