import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './components/Navbar/Navbar.css'
import './components/LogoEmpresa/LogoEmpresa.css'
import './components/Button/Button.css'
import './components/CartWidget/CartWidget.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/DropDown/DropDown.css'
import './components/ItemList/ItemList.css'
import './components/Items/Items.css'
import './components/ItemDetailContainer/ItemDetailContainer.css'
import './components/ItemDetail/ItemDetail.css'
import './components/ItemCount/ItemCount.css'
import './components/Count/Count.css'
import './components/CartContainer/CartContainer.css'
import './components/CartList/CartList.css'
import './components/CheckOutForm/CheckOutForm.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';
import CheckoutContainer from './components/CheckOutContainer/CheckOutContainer';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path ='/' element={<ItemListContainer greeting='Productos'/>}/>
            <Route path ='/Item/:ItemId' element={<ItemDetailContainer/>}/>
            <Route path ='/Category/:CategoryId' element={<ItemListContainer/>}/>
            <Route path ='/Cart' element={<CartContainer/>}/>
            <Route path ='/CheckOut' element={<CheckoutContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
