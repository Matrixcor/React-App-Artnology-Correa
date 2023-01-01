import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import LogoEmpresa from "../LogoEmpresa/LogoEmpresa";
import DropDown from "../DropDown/DropDown";
import { Link } from "react-router-dom";

const Navbar = (props)=>{
console.log()

    return (

        <div className="barraNavegacion">
            
            <LogoEmpresa/>

            <div className="barraOpciones">
                <Link to='/'> <Button text="Inicio"> Inicio </Button> </Link>
                <DropDown text="Noteboooks"> Categorias </DropDown>
                <Button text="Ingreso"></Button>
            </div>
            
            <CartWidget/>

        </div>
    )
}
export default Navbar;