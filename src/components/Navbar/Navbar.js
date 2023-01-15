import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return (
        <div className="barraOpciones">
            <Link to='/'> <Button text="Inicio"> Home </Button> </Link>
            <DropDown text="Noteboooks"> Categorias </DropDown>
        </div>
        
    )
}
export default NavBar;