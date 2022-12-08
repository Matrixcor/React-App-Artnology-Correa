import ItemList from "../ItemList/ItemList"
import { useState , useEffect } from "react"
import {getProduc, getProducByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ContenedorArticulos = ({greeting})=>{

    const [productos,setProductos]= useState([])
    const [isCharge, setIsCharge]= useState(false)
    const {CategoryId} = useParams()
    const [titulo, setTitulo]=useState(greeting)
    useEffect(()=>{

        if( CategoryId){
            setIsCharge(true)
            getProducByCategory(CategoryId).then(response =>{
                setProductos(response)
                setTitulo(CategoryId)
            }).catch( error=>{
                console.log(error)
            }).finally(()=>{
                setIsCharge(false)
                setTitulo(CategoryId)
            })
        }else{
            setIsCharge(true)
            getProduc().then(response =>{
                setProductos(response)
            }).catch( error=>{
                console.log(error)
            }).finally(()=>{
                setIsCharge(false)
            })
        }
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