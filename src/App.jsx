import './App.css';
import NavItem from './components/navItems';
import CartNlist from './components/cartlist';

function App() {
  return (
    <div>
      <header>
        <div id='logo'><h1>LOGO</h1></div>
        <hr />
        <nav>
          <NavItem seleccion="Inicio"/>
          <NavItem seleccion="Productos"/>
          <NavItem seleccion="Contactos"/>
          <CartNlist/>
        </nav>
      </header>
    </div>
  );
}

export default App;
