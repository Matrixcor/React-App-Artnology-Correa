import CartWidgetButton from '../CartWidgetButton/CartWidgetButton'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartWidget = ()=>{
    
const { quantityCartWidget } = useContext(CartContext)
const articulos = quantityCartWidget()

return(
    <div>
        <Link className='linkstyle' to = '/Cart'> 
            <CartWidgetButton articulos={articulos}/> 
        </Link>
    </div>
    )
}
export default CartWidget