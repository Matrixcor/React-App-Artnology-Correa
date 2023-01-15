import { createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const arrayGuardado = JSON.parse(localStorage.getItem("ArrayJson")) || [];  // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio

    const [prodCarrito , setProdCarrito] = useState(arrayGuardado)

    function GuardaCarrito(prodCarrito){ //almaceno en local storage lo que tengo dentro del carrito
        let ArrayCarro = [];
        ArrayCarro = JSON.stringify(prodCarrito);
        localStorage.setItem("ArrayJson",ArrayCarro);
    }

    const addProdCarrito = ({id,title,stock,price,pictureUrl,count}) =>{ //funcion para agregar los productos, con validacion si ya esta cargado.
        if(!isInCarrito(id)){
            setProdCarrito( [...prodCarrito, {id,title,stock,price,pictureUrl,count}]) //el prodById debe contener la cantidad, debo eliminar el stock, para ello recibo el objeto ya desestructurado de itemdetailcontainer
            GuardaCarrito([...prodCarrito, {id,title,stock,price,pictureUrl,count}])
            msgAlert(1)
        }
    }

    const isInCarrito = (id)=>{ //funcion que valida si esta cargado.
        return prodCarrito.some(prod => prod.id === id)
    }

    const removeProdCarrito = (id)=>{ //funcion para quitar productos para el cart
        const prodEncontrado = prodCarrito.find(prod => prod.id === id) // encuentro el producto y me fijo la cantidad para eliminar o cambiar la cantidad
        prodEncontrado.count > 1 ? cambioCantProd(id) : eliminoProd(id)
    }

    const cambioCantProd = (id) =>{
        const copiaProdCarrito = prodCarrito.map(prod => prod) //creo una copia del arreglo carrito
        for(var i=0 ; i< copiaProdCarrito.length; i++){ //modifico el valor carrito creando una copia para no alterar el orden del arreglo de productos
            if(copiaProdCarrito[i].id === id){
                copiaProdCarrito[i].count -= 1
            }
        }
        setProdCarrito(copiaProdCarrito)
        GuardaCarrito(copiaProdCarrito)
        msgAlert(2)
    }
    const eliminoProd = (id)=>{ // si hay un unico producto lo quito del carrito
        const modificaCarrito = prodCarrito.filter(prod => prod.id !== id)
        setProdCarrito(modificaCarrito)
        GuardaCarrito(modificaCarrito)
        msgAlert(3)
    }

    const getTotal = ()=>{ // va sumando el importe total de los items en el carrito
        let acc = 0
        prodCarrito.forEach( prod =>{
            acc += prod.count * prod.price
        })
        return acc
    }
    const clearCart = ()=>{ //una vez realizada la compra elimino los elementos del carrito
        setProdCarrito([])
        GuardaCarrito([])
    }
    const quantityCartWidget = ()=>{ // actualiza el contador del cart widget
        let quantity = 0
        prodCarrito.forEach( prod =>{
            quantity += prod.count
        })
        return quantity
    }

    const msgAlert = (alert)=>{
        switch(alert){
            case 1 : 
                toast.success('El producto se agrego !', { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case 2 : 
                toast.success('El producto se quito del carrito !', { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case 3 : 
                toast.success('El producto se Elimino del carrito !', { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case 4 : 
                toast.success('Error de Conexion, actualize la pagina !', { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case 5:
                toast.success('Por favor complete todos los campos!', { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            default:
                console.log("carrito")
                break;
        
        }
    }
    
    return (
        <CartContext.Provider value = {{prodCarrito, addProdCarrito, removeProdCarrito, setProdCarrito, getTotal, quantityCartWidget, clearCart, msgAlert }}>
            {children}
        </CartContext.Provider>
    )   
}
