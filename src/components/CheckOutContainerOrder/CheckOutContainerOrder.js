import Button from "../Button/Button"
import { Link } from "react-router-dom"

const CheckOutContainerOrder = ( { orderId, usuario})=>{
    return(
        <div className="ContainerOrder">
            <h1> Su compra se genero de manera exitosa </h1>
            <p> <b> Nº de orden: </b> {orderId} </p>
            <p> <b> Usuario: </b>  {usuario}</p>
            <p>  </p>
            <Link to='/'><Button text={ "Continuar" }/></Link>
        </div>
        
    )
}
export default CheckOutContainerOrder