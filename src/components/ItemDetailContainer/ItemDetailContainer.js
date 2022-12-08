import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { getProducById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{

    const [prodId,setProdId] = useState({})
    const [isCharge, setIsCharge]= useState(false)
    const {ItemId} = useParams()

    useEffect (()=>{
        setIsCharge(true)
        getProducById( ItemId )

        .then(response =>{
            setProdId(response)
        })
        .catch(error =>{
            console.log(error)
        }).finally(()=>{
            setIsCharge(false)
        })
       
    },[ItemId])

    if(isCharge){
        return <h1 className="spinner"> Cargando ...</h1>
    }

    return(
        <div className="ItemDetail">
          
            <ItemDetail key={prodId.Id} prodId={prodId} />
               
        </div>
    )
}
export default ItemDetailContainer