import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducById } from "../../Services/Firebase/FireStore/Productos"

const ItemDetailContainer = ()=>{

    const [prodById,setProdId] = useState({})
    const [isCharge, setIsCharge]= useState(false)
    const {ItemId} = useParams()
   
    useEffect (()=>{
        setIsCharge(true)
        getProducById(ItemId)
        .then( productos =>{
            setProdId(productos)
        }).finally(()=>{
            setIsCharge(false)
        })
    },[ItemId])

    if(isCharge){
        return <h1 className="spinner"> Cargando ...</h1>
    }
    
/* elimine de item detail key={prodId.Id} , prodId={prodId} */
    return(
        <div className="ItemDetail">
          
            <ItemDetail  prodById={prodById} />
               
        </div>
    )
}
export default ItemDetailContainer