import CheckOutList from "../CheckOutList/CheckOutList"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"

import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { db } from "../../Services/Firebase/FirebaseConfig"

const CheckOutContainer = ()=>{
    const { prodCarrito , getTotal , clearCart} = useContext(CartContext)
    const [ datoCliente , setDatoCliente ] = useState({})
    const [ estadoBoton , setEstadoBoton ] = useState(true)

    const clientOrder = (dataForm)=>{
        const datos = {...dataForm}
        const objCliente={
            Cliente:{
                nombre: datos.nombre,
                apellido: datos.apellido,
                telefono: datos.tel,
                email: datos.email
            }
        }
        setDatoCliente(objCliente)
        setEstadoBoton(false)
    }

    const handleOrderCreator = ()=>{
        const objOrden ={
            datoOrden:{
                Cliente: datoCliente,
                items: prodCarrito, // debo cargar los productos sin el elemento stock
                total: getTotal(),

            }
        }
        const orderRef= collection(db, 'orders')
        addDoc(orderRef, objOrden)
        .then( response=>{
        console.log(response.id)
        })
        console.log("su orden se genero")
        clearCart()
    }
    return(
        <div className="ContenedorItems">
            <h1> Checkout</h1>
            { prodCarrito.map( prod =>( <CheckOutList key={prod.id} prod={prod}/>) ) }

            <CheckOutForm input={clientOrder}/>

            <button disabled={estadoBoton} onClick={()=> handleOrderCreator()}> Confirmar Orden </button>
        </div>
    )
}
export default CheckOutContainer