const DropDown = (props)=>{

    return(
        
        <div className="nav-item dropdown-center BotonOpciones">
            <a className="nav-link dropdown-toggle Inner" role="button" data-bs-toggle="dropdown" data-bs-offset="0,30" aria-expanded="false">
            {props.children}
            </a>
            <ul className="dropdown-menu OpcionDesplegable">
                <li className="dropdown-list">
                    <a className="dropdown-item"> {props.text} </a>
                </li>
            </ul>
        </div>
        
    )
}
export default DropDown