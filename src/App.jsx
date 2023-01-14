import './App.css';
import Nav from './components/nav';
import ProductList from './components/productList'; 
import ProductPages from './components/productsPage';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Superior from './pages/superior';
import Inferior from './pages/inferior';
import Zapatillas from './pages/zapatillas'
import Carrito from './pages/carrito';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav></Nav>  
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='superior' element={<Superior/>} />
          <Route path='inferior' element={<Inferior/>} />
          <Route path='zapatillas' element={<Zapatillas/>} />
          <Route path='carrito' element={<Carrito/>} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
