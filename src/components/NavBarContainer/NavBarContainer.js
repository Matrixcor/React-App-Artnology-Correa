import NavBar from "../NavBar/NavBar"
import CartWidget from "../CartWidget/CartWidget";
import LogoEmpresa from "../LogoEmpresa/LogoEmpresa";

const NavBarContainer = ()=>{

    return(
        <div className="NavBarContainer">
            <LogoEmpresa/>
            <NavBar/>
            <CartWidget/>
        </div>
    )
}
export default NavBarContainer