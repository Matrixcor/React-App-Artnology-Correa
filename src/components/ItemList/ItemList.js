import ItemCount from "../ItemCount/ItemCount"
import Items from "../Items/Items"
const ItemList = ()=>{

    return(

        <div className="ContainerProduc">
            {/* aca va lo relacionado al producto*/}
            <Items/>
            <ItemCount initial={0} stock={15} />
        </div>
    )
}
export default ItemList