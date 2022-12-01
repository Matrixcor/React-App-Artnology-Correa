import Count from "../Count/Count"
const ItemCount = ()=>{

    const ManejaOnAdd = (quantity)=>{
        console.log("Se agrego al carrito " + quantity)
    }
    return(

        <div className="ContainerCounter">
            <p> nombre del producto</p>
            <Count initial={0} stock={15} onAdd={ManejaOnAdd}/>
                        
        </div>
    )

}
export default ItemCount