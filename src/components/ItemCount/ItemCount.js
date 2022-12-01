import Count from "../Count/Count"
const ItemCount = ()=>{

    const handleOnAdd = (quantity)=>{
        console.log("Se agrego al carrito " + quantity)
    }
    return(

        <div className="ContainerCounter">
            <p> nombre del producto</p>
            <Count initial={0} stock={15} onAdd={handleOnAdd}/>
                        
        </div>
    )

}
export default ItemCount