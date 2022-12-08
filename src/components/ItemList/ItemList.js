import Items from "../Items/Items"

const ItemList = ({productos})=>{

    return(
        <div className="ContainerProduc"> 
           { productos.map( prod =>(
                <Items key={prod.id} prod={prod}/>
           ))}
        </div>
    )
}
export default ItemList