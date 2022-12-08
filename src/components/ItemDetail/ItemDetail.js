import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({prodId})=>{

    return(
        <div className="contenedorDetalles">
            
            <img className="boxPicture" src={prodId.pictureUrl}></img>
            
            <div className="contenedorCaracteristicas">

                <h2>{prodId.title}</h2>
                <p>{prodId.description}</p>
                <p> <b> $ {prodId.price} </b></p>

            </div>
            <div className="contenedorCount">
                
                <ItemCount prodId={prodId}/>

            </div>
            
        </div>
        
    )
}
export default ItemDetail