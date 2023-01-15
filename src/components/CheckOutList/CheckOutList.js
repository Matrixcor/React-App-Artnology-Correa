import CartItem from "../CartItem/CartItem"
const CheckOutList = ({prod})=>{

    return(
        <CartItem cssprop={"containerCheckoutList"} prod={prod}/>
    )
}
export default CheckOutList