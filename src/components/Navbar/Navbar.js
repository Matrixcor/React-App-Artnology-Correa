import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import LogoEmpresa from "../LogoEmpresa/LogoEmpresa";
import DropDown from "../DropDown/DropDown";


const Navbar = (props)=>{
console.log()

    return (

        <div className="barraNavegacion">
            
            <LogoEmpresa/>

            <div className="barraOpciones">
                <DropDown text="Acerca de Nosotros"> Inicio </DropDown>
                <DropDown text="Noteboooks"> Articulos </DropDown>
                <Button text="Ingreso"></Button>
            </div>
            
            <CartWidget/>

        </div>
    )
}
export default Navbar;