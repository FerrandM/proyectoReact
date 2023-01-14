import '../css/nav.css'
import { Link } from 'react-router-dom'
import CartWidget from './cartWidget'
import { useState } from 'react'

export default function Nav() {
    const cart = []
    return(
        <header>
            <h1 id='logo'><Link to='/'>LOGO</Link></h1>
            <div className='nav-div'>
                <nav className='nav-sup'>
                    <ul>
                        <Link to='/'><li>HOME</li></Link>
                        <Link to='superior'><li>SUPERIOR</li></Link>
                        <Link to='inferior'><li>INFERIOR</li></Link>
                        <Link to='zapatillas'><li>ZAPATILLAS</li></Link>
                    </ul>
                </nav>
            </div>
            <div className='userTools'><Link to='carrito'>
                <CartWidget 
                    qty = {cart.length}
                />
            </Link></div>             
        </header>    
    )
}