import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

import { CartContext } from "../Context/CartContext"


const ItemDetail = ({prodById})=>{
    const { addProdCarrito } = useContext(CartContext)
    const[ quantityAdd, setQuantity] = useState(0) // este estado maneja el contador y el finalizar compra

    const {id,title,price,description,pictureUrl} = prodById //para controlar que elementos le paso al context, desestructuro el objeto
    
    const manejaOnadd = (count) =>{ //guarda la cantidad
            
        if(count > 0){
            setQuantity (count) //mod
            addProdCarrito({id,title,price,pictureUrl,count}) //llamo a la funcion para modificar el context
        }
    } 
    //ver como cambiar los items de description por un componente item

    return(
        <div className="contenedorDetalles">
                
            <img className="boxPicture" src={pictureUrl}></img>
            <div className="contenedorCaracteristicas">
                <h2>{title}</h2>
                <p>{description}</p>
                <p> <b> $ {price} </b></p>
            </div>

            <div className="contenedorCount">
                {
                    quantityAdd === 0 ? (<ItemCount manejaOnadd={manejaOnadd} initial={0} stock={prodById.stock}/>) : ( <Link className='BotonFin' to = '/Cart'> <button> Finalizar Compra </button> </Link>)
                }
            </div>  
        </div>        
    )
}
export default ItemDetail