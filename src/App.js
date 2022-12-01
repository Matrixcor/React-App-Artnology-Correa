
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Popper from 'popper.js';
import './components/Navbar/Navbar.css'
import './components/LogoEmpresa/LogoEmpresa.css'
import './components/Button/Button.css'
import './components/CartWidget/CartWidget.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/DropDown/DropDown.css'
import './components/ItemList/ItemList.css'
import './components/ItemCount/ItemCount.css'
import './components/Count/Count.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Productos'/>
    </div>
  );
}

export default App;
