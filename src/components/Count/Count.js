import { useState } from 'react'
import Button from '../Button/Button'
const Count = ({initial, stock, onAdd})=>{

    const [count, setCount] = useState(initial)

    const increment = ()=>{
        count < stock ?  setCount(count + 1) : setCount(stock) 
    }
    const decrement = ()=>{
        count > 0 ? setCount(count - 1) : setCount(0)
    }
    
    return(
        <div className='Contador'>
            <button className='Boton' onClick={ ()=> increment()}> + </button>
            <p className='ContadorValor'> {count}</p>
            <button className='Boton' onClick={()=> decrement()}> - </button>
            <button className='Boton' onClick={()=>onAdd(count)}> agregar producto</button>
        </div>
    )
}
export default Count