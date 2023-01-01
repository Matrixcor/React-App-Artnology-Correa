const Count = ({ count, increment, decrement})=>{
    return(
        <div className='Contador'>
            <button className='Boton' onClick={increment}> + </button>
            <p className='ContadorValor'> {count} </p>
            <button className='Boton' onClick={decrement}> - </button>
        </div>
    )
}
export default Count