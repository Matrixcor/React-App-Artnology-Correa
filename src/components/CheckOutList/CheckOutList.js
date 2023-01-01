
const CheckOutList = ({prod})=>{

    return(
        <div className="contenedorCartList">
            <img className="imagenProducto" src={prod.pictureUrl}></img>
            <div className="contenedorCaracteristicas">
                <h2>{prod.title}</h2>
                <p> Cantidad: {prod.count} </p>
            </div>
        </div>
    )
}
export default CheckOutList