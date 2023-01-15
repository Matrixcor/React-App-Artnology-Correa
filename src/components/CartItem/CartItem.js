
const CartItem = ({prod,cssprop})=>{

    return(
        <div className={cssprop}>
            <img className="imagenProducto" src={prod.pictureUrl} alt="Imagen Producto"></img>
            <div className="contenedorCaracteristicas">
                <h2>{prod.title}</h2>
                <p> Cantidad: {prod.count} unidades</p>
                <p> Stock Disponible: {prod.stock}</p>
                <p> <b> Subtotal: $ {prod.price * prod.count} </b></p>
            </div>
        </div>
    )
}
export default CartItem