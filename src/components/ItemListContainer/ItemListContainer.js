import ItemList from "../ItemList/ItemList"
const ContenedorArticulos = ({greeting})=>{

    return(
        <main className="ContenedorItems">
            <h1> {greeting} </h1>
            <ItemList/>
        </main>
        
    )

}
export default ContenedorArticulos