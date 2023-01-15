import CheckOutList from "../CheckOutList/CheckOutList"
import CheckOutFormContainer from "../CheckOutFormContainer/CheckOutFormContainer"
import CheckOutContainerOrder from "../CheckOutContainerOrder/CheckOutContainerOrder"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { db } from "../../Services/Firebase/FirebaseConfig"
import { addDoc, collection, query, getDocs , where, documentId, writeBatch } from "firebase/firestore"
import { toast } from "react-toastify"

const CheckOutContainer = ()=>{

    const { prodCarrito, getTotal , clearCart } = useContext(CartContext)
    const [ datoCliente , setDatoCliente ] = useState({})
    const [ estadoPasosCompra , setEstadoPasosCompra ] = useState({listOk:false, dataOk:false, stockOk: true, orderCreateId: 0})
    const [isCharge, setIsCharge]= useState(false)

    const clientOrder = (dataForm)=>{
        const datos = {...dataForm}
        const objCliente={
            nombre: datos.nombre,
            apellido: datos.apellido,
            telefono: datos.telefono,
            email: datos.email
        }
        setDatoCliente(objCliente)
    }

    const HandleOrderCreator = async ()=>{
        const objOrden ={
            Cliente: datoCliente,
            items: prodCarrito, // debo cargar los productos sin el elemento stock
            total: getTotal(),
        }  
        setIsCharge(true)

        const batch = writeBatch(db)
        const prodSinStock = []
        const prodDbIds = prodCarrito.map(prod=> prod.id)
        const prodRef = query(collection(db , 'productos'), where(documentId(),'in' , prodDbIds))
        const prodDbinCarrito = await getDocs(prodRef)

        const { docs } = prodDbinCarrito
        docs.forEach( async (doc) => {

            const prodDb = doc.data()
            const prodDbStock = prodDb.stock //el stock del producto que quiero comprar
            const prodInCarrito = prodCarrito.find(prod=> prod.id === doc.id)
            const prodQuantityAdd = prodInCarrito?.count //la cantidad que quiero agregar

            if(prodDbStock >= prodQuantityAdd){
                batch.update(doc.ref, {stock: prodDbStock - prodQuantityAdd})
                setEstadoPasosCompra({...estadoPasosCompra, stockOk: true})
            }else{
                prodSinStock.push({id: doc.id, ...prodDb})
                setEstadoPasosCompra({...estadoPasosCompra, stockOk: false})
                toast.success('Alguno de los productos seleccionados no poseen Stock', { position: toast.POSITION.BOTTOM_RIGHT });
            }
            if(prodSinStock.length === 0){
                await batch.commit()
                orderCreator(objOrden) //Genero la orden en firebase
            }else{
                setIsCharge(false)
            }
        })
    }

    const orderCreator = (objOrden)=>{
        const orderRef = collection(db, 'orders')
        addDoc(orderRef, objOrden) //genero la orden en la base de datos
            .then( response=>{ 
                setEstadoPasosCompra({...estadoPasosCompra, orderCreateId: response.id})
                setIsCharge(false)
            }).catch((error)=>{
                console.log(error)
            })
        clearCart()
    }
    
    if(isCharge){
        return <h1 className="spinner"> Cargando ...</h1>
    }
    if (estadoPasosCompra.orderCreateId !== 0 ){
        return <CheckOutContainerOrder orderId={estadoPasosCompra.orderCreateId} usuario={datoCliente.email}/>
    }

    return(
        <div className="ContenedorItems">
            <h1> CheckOut </h1>
            {prodCarrito.map( prod =>( 
            <CheckOutList key={prod.id} prod={prod}/>))}

            <p><b>Total de la Compra: $ </b>{getTotal()}</p>

            {estadoPasosCompra.listOk ? <CheckOutFormContainer input={clientOrder} estadoPasosCompra={estadoPasosCompra} setEstadoPasosCompra={setEstadoPasosCompra}/> : <button className="BotonFin" onClick={()=>setEstadoPasosCompra({...estadoPasosCompra,listOk:true})}> Siguiente </button> }
            {estadoPasosCompra.stockOk ? <button className="BotonFin" onClick={()=> HandleOrderCreator()} style={{ visibility: estadoPasosCompra.dataOk ? "visible" : "hidden" }}> Comprar </button> : <Link to='/Cart'><button className="BotonFin">Volver</button></Link>}
        </div>
    )
}
export default CheckOutContainer