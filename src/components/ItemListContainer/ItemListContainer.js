import ItemList from "../ItemList/ItemList"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducByCategoryId } from "../../Services/Firebase/FireStore/Productos"

const ContenedorArticulos = ({greeting})=>{

    const [productos,setProductos]= useState([])
    const [isCharge, setIsCharge]= useState(false)
    const {CategoryId} = useParams()
    const [titulo, setTitulo]=useState(greeting)

    useEffect(()=>{
        setIsCharge(true)
        getProducByCategoryId(CategoryId)
            .then( productos =>{
                setProductos(productos)
            }).catch( error =>{
                console.log(error)
            }).finally(()=>{
                setIsCharge(false)
                setTitulo(CategoryId)
            })
    },[CategoryId])
 
    if(isCharge){
        return <h1 className="spinner"> Cargando ...</h1>
    }
    return(
        <main className="ContenedorItems">
            <h1> {titulo} </h1>
            <ItemList productos={productos}/>
        </main>
        
    )
}
export default ContenedorArticulos