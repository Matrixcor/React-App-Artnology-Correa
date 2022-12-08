import { Link } from "react-router-dom"
const Items = ({prod})=>{
    return(
        <div className="ContenedorItem">
            <img className="boxImage" src={prod.pictureUrl}></img>
            <h2 className="title">{prod.title}</h2>
            <Link className="boxDetalle" to={`/Item/${prod.id}`}> Detalles </Link>
        </div>
    )
}
export default Items