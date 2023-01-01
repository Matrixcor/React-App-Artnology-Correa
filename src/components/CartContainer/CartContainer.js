import CartList from '../CartList/CartList'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartContainer = ()=>{
    const { prodCarrito, removeProdCarrito, getTotal } = useContext(CartContext)
    const Total = getTotal()

    return(
        <div className="ContenedorItems"> 
            <div className="Con"> 
                { prodCarrito.map( prod =>( <CartList key={prod.id} prod={prod} removeProdCarrito={removeProdCarrito}/> ))
                }
            </div>
            <p><b> Total: { Total } </b></p>
            <Link to ='/CheckOut'> Terminar Orden </Link>
        </div> 
    )
}
export default CartContainer