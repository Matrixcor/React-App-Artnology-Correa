
const CartList = ({prod, removeProdCarrito})=>{

    return(
        <div className="contenedorCartList">
            <img className="imagenProducto" src={prod.pictureUrl}></img>
            <div className="contenedorCaracteristicas">
                <h2>{prod.title}</h2>
                <p> Cantidad: {prod.count} </p>
                <p> <b> Subtotal: $ {prod.price * prod.count} </b></p>
            </div>

            <div className="contenedorRemover">
              <button onClick={()=> removeProdCarrito( prod.id)}> Remover del carrito</button>
            </div> 
        </div>
    )

}
export default CartList