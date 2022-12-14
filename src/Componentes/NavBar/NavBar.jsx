import "./NavBar.css";


import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {useContext} from 'react';

import myContext from '../../Context/Context'

const NavBar = () => {

    const {pizzaAgregada, setPizzaAgregada, pizzaDetalle, setPizzaDetalle} = useContext(myContext)

    const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)   

    return (
        <header className="header">
            <nav className="navbar">    
            <div className="logo-div">
                <h1 className="logo-title">
                    π΄π Mamma mia ππ΄
                </h1>
            </div>
            <div className="links-div">
                <NavLink id={setActiveClass} className="navlinks" to="/menu" onClick={() => setPizzaDetalle([])}>MenΓΊ</NavLink>
                <NavLink id={setActiveClass} className="navlinks" to="/pizzas">Pizzas</NavLink>                
            </div>
            <Link className="carrito-link" to="/carrito">π</Link> 
            
        </nav>
        </header>
        
    )
}

export default NavBar