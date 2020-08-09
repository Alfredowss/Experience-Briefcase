import React from 'react'
import '../styles/components/desktop+/navbar.scss'
import brand from '../images/brand-azul.svg'
import logo from '../images/logo-azul.png'

class Navbar extends React.Component{
    render(){
        return(
            <nav className="Navbar">
                <ul>
                    <li><img src={brand}></img></li>
                    <li><img src={logo} ></img></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar