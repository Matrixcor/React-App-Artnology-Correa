import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CartContext } from "../Context/CartContext"
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({prodById})=>{
    const { addProdCarrito } = useContext(CartContext)
    const[ quantityAdd, setQuantity] = useState(0) // este estado maneja el contador y el finalizar compra

    const {id,title,stock,price,description,pictureUrl} = prodById //para controlar que elementos le paso al context, desestructuro el objeto
    
    const manejaOnadd = (count) =>{ //guarda la cantidad
            
        if(count > 0){
            setQuantity (count)
            addProdCarrito({id,title,stock,price,pictureUrl,count}) //llamo a la funcion para modificar el context
        }
    } 

    return(
        <div className="contenedorDetalles">
                
            <img className="boxPicture" src={pictureUrl} alt="imagen producto"></img>
            <div className="contenedorCaracteristicas">
                <h2>{title}</h2>
                <p>{description}</p>
                <p> <b>Stock: </b> {stock} unidades.</p>
                <p> <b>Precio: </b>$ {price}. </p>
            </div>

            <div className="contenedorCount">
                {
                    quantityAdd === 0 ? (<ItemCount manejaOnadd={manejaOnadd} initial={0} stock={prodById.stock}/>) : ( 
                    <div className="contenedorButton">
                        <Link  to = '/Cart'> <button className="BotonFin">Finalizar Compra</button></Link> 
                        <Link  to = '/'> <button className="BotonFin">Seguir Comprando</button></Link> 
                    </div>)
                }
            </div> 
            
        </div>        
    )
}
export default ItemDetail