import { Link } from "react-router-dom"
const Items = ({prod})=>{

    return(
        <Link className="ContenedorItem" to={`/Item/${prod.id}`}>
            <div className="">
                <img className="boxImage" src={prod.pictureUrl}></img>
                <h2 className="title">{prod.title}</h2>
            </div>
        </Link>
    )
}
export default Items