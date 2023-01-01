import { useState } from "react"
import Count from "../Count/Count"

const ItemCount = ({ manejaOnadd, initial, stock})=>{

    const [count, setCount] = useState(initial)

    const increment = (e)=>{
        count < stock ?  setCount(count + 1) : setCount(stock) 
    }
    const decrement = (e)=>{
        count > 0 ? setCount(count - 1) : setCount(0)
    }
//dar estilo al boton finalizar compra
    return(

        <div className="ContainerCounter">
            <Count count={count} increment={increment} decrement={decrement} />
            <button className='Boton' onClick={()=>manejaOnadd(count)}> Agregar Producto</button>       
        </div>
    )

}
export default ItemCount