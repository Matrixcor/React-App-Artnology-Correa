import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './components/NavBarContainer/NavBarContainer.css'
import './components/NavBar/NavBar.css'
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
import './components/CartItem/CartItem.css'
import './components/CheckOutFormContainer/CheckOutFormContainer.css'
import './components/CheckOutForm/CheckOutForm.css'
import './components/CheckOutContainerOrder/CheckOutContainerOrder.css'
import NavBarContainer from './components/NavBarContainer/NavBarContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import CheckoutContainer from './components/CheckOutContainer/CheckOutContainer';

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBarContainer/>
          <Routes>
            <Route path ='/' element={<ItemListContainer greeting='Productos'/>}/>
            <Route path ='/Item/:ItemId' element={<ItemDetailContainer/>}/>
            <Route path ='/Category/:CategoryId' element={<ItemListContainer/>}/>
            <Route path ='/Cart' element={<CartContainer/>}/>
            <Route path ='/CheckOut' element={<CheckoutContainer/>}/>
          </Routes>
          <ToastContainer></ToastContainer>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
