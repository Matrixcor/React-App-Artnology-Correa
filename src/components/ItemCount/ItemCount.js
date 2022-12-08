import Count from "../Count/Count"
const ItemCount = ({prodId})=>{

    const ManejaOnAdd = (quantity)=>{
        if(quantity > 0){
            console.log("Se agrego al carrito " + quantity)
        }
    }
    return(

        <div className="ContainerCounter">
        
            <Count initial={0} stock={prodId.stock} onAdd={ManejaOnAdd}/>
                        
        </div>
    )

}
export default ItemCount