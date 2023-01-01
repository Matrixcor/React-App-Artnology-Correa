import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [prodCarrito , setProdCarrito] = useState([])
    //funcion para agregar los productos, con validacion si ya esta cargado.
    const addProdCarrito = ({id,title,price,pictureUrl,count}) =>{
        if(!isInCarrito(id)){
            setProdCarrito( [...prodCarrito, {id,title,price,pictureUrl,count}]) //el prodById debe contener la cantidad, debo eliminar el stock, para ello recibo el objeto ya desestructurado de itemdetailcontainer
        }else{
            console.log("el producto ya se encuentra agregado") // agregar un toastyfy
        }
    }

    const isInCarrito = (id)=>{ //funcion que valida si esta cargado. hasta ahora funciona
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
    }
    const eliminoProd = (id)=>{ // si hay un unico producto lo quito del carrito
        const modificaCarrito = prodCarrito.filter(prod => prod.id !== id)
        setProdCarrito(modificaCarrito)
        console.log("el producto se elimino del carrito") // agregar un toastyfy
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
        
    }
    const quantityCartWidget = ()=>{ // actualiza el contador del cart widget
        let quantity = 0
        prodCarrito.forEach( prod =>{
            quantity += prod.count
        })
        return quantity
    }
    return (
        <CartContext.Provider value = {{prodCarrito, addProdCarrito, removeProdCarrito, getTotal, quantityCartWidget, clearCart}}>
            {children}
        </CartContext.Provider>
    )   
}
