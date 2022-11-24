
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Popper from 'popper.js';
import './components/Navbar/Navbar.css'
import './components/LogoEmpresa/LogoEmpresa.css'
import './components/Button/Button.css'
import './components/CartWidget/CartWidget.css'
import './components/ContenedorArticulos/ContenedorArticulos.css'
import './components/DropDown/DropDown.css'
import Navbar from './components/Navbar/Navbar';
import ContenedorArticulos from './components/ContenedorArticulos/ContenedorArticulos';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContenedorArticulos greeting='Productos'/>
    </div>
  );
}

export default App;
