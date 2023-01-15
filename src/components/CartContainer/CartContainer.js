import CartList from '../CartList/CartList'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { ToastContainer } from 'react-toastify'

const CartContainer = ()=>{
    const { prodCarrito, removeProdCarrito, getTotal } = useContext(CartContext)
    const Total = getTotal()

    return(
        <div className="ContenedorCart"> 
            <div className="ContenedorCartList">
                { 
                  prodCarrito.length === 0 ? (<h1> El carrito esta Vacio </h1>) : (prodCarrito.map(prod =><CartList key={prod.id} prod={prod} removeProdCarrito={removeProdCarrito}/>))
                }
            </div>
            <p className = {prodCarrito.length === 0 ? 'hide' : 'show'}><b> Total: $ { Total } </b></p>
            <Link to = {prodCarrito.length === 0 ? '/' : '/CheckOut'}> <button className="BotonFin" >{prodCarrito.length === 0 ? 'Seguir Comprando' : 'Terminar compra'}</button> </Link>
            <ToastContainer/>
        </div> 
    )

}
export default CartContainer