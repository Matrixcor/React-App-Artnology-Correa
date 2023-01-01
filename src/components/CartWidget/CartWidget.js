import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartWidget = ()=>{
// debo convertir el icono en Link hacia cart
const { quantityCartWidget } = useContext(CartContext)
const articulos = quantityCartWidget()
    return(
        <Link to = '/Cart'>
            <button className="contenedorIconCarrito">
                <img src={'./images/basket-buy-shop.svg'} alt='Cart-Widget'></img>
                <p>{articulos}</p>
            </button>
        </Link>
    )
}
export default CartWidget