import React from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'
// import './MainHeader.scss'

const NavbarView =(props) =>{
   
    return(
        <header>
            <nav className="site-navbar">
                <NavLink exact to="/" className="logo">Lomito</NavLink>
                <div>
                    {/* <a href="#">Adopta</a>
                    <a href="#">Busca hogar</a>
                    <a href="#">Sesión</a> */}
                    <NavLink exact to="adopt">Adopta</NavLink>
                    <NavLink exact to="search-home">Buscar Hogar</NavLink>
                    <NavLink exact to="session">Sesión</NavLink>
                </div>
            </nav>
        </header>
    )

}

export default NavbarView