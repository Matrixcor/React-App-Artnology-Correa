import { getDocs , getDoc , doc , collection , query , where } from "firebase/firestore"
import { db } from "../FirebaseConfig"

export const getDataLoggin = ()=>{

    return new Promise((resolve, reject) => {
        const collectionRef = CategoryId ? query (collection( db, 'productos') , where('category','==', CategoryId))  : collection( db, 'productos')
        
        getDocs(collectionRef)
            .then(response=>{
                const prodAdaptados = response.docs.map(doc =>{
                    const datos = doc.data()
                    return {id: doc.id, ...datos}
                })
                resolve(prodAdaptados)
            }).catch(error =>{
                reject(error)
            })
    })  
}
