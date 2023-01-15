
const CartWidgetButton = ({articulos})=>{

    return(
        <button className="contenedorIconCarrito">
            <img src={"images/basket-buy-shop.png"} alt='Cart-Widget'></img>
            <p>{articulos}</p>
        </button>
    )

}
export default CartWidgetButton