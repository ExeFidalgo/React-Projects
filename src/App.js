import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Producto from './Components/Producto';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import Home from './Pages/Home'
import Contador from './Pages/Contador';
import Detalle from './Pages/Detalle';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/producto' element={<Producto />} />
          <Route path='/alta' element={<Registro />} />
          <Route path='/ingresar' element={<Login />} />
          <Route path='/contador' element={<Contador />} />
          <Route path='/producto/:productoId' element={<Detalle />} />
        </Routes>
        <div>Footer</div>
      </Router>
    </div>
  );
}

export default App;
