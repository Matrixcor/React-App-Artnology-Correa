import CartItem from "../CartItem/CartItem"
const CartList = ({prod, removeProdCarrito})=>{

    return(
        <div className="contenedorCartList">
            <CartItem cssprop={"contenedorCartItem"} prod={prod}/>
            <button className="contenedorRemover" onClick={()=> removeProdCarrito( prod.id)}>Remover</button>
        </div>
    )

}
export default CartList