import { Link } from "react-router-dom"
const DropDown = (props)=>{

    return(
        
            
        <div className="nav-item dropdown-center BotonOpciones">
            <a className="nav-link dropdown-toggle Inner" role="button" data-bs-toggle="dropdown" data-bs-offset="0,30" aria-expanded="false">
            {props.children}
            </a>
            <ul className="dropdown-menu OpcionDesplegable">
                <li className="dropdown-list">
                    <Link className="dropdown-item" to={`/`} > Ver Todo </Link>
                    <Link className="dropdown-item" to={`/Category/Notebooks`} > Notebooks </Link>
                    <Link className="dropdown-item" to={'/Category/Tablets'}> Tablets </Link>
                    <Link className="dropdown-item" to={'/Category/Laptops'}> Laptops </Link>
                    <Link className="dropdown-item" to={'/Category/Camaras'}> Camaras </Link>
    
                </li>
            </ul>
        </div>
    )
}
export default DropDown