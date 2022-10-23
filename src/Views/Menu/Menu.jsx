import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import myContext from '../../Context/Context'


import  './Menu.css';

/* style={{backgroundImage:`url(${pizzaInd.img})`}}*/
/*onClick={verMas} */

const Menu = () => {
    
    const [pizzas, setPizzas] = useState([]);    
    const [id, setId] = useState()
    
    const {pizzaAgregada, setPizzaAgregada, pizzaDetalle, setPizzaDetalle, carrito, setCarrito} = useContext(myContext)
    
    const navigate = useNavigate();

    const fetchPizzas = async () => {
        const endpoint = './pizzas.json'
        const response = await fetch(endpoint);
        const basePizzas = await response.json();
        setPizzas(basePizzas);      
    }

    useEffect(() => {
        fetchPizzas()
    } ,[])

    const verMas = () => {     
       navigate(`/pizzas/${id}`) 
       setPizzaDetalle(...pizzaDetalle, pizzas.filter((pizza) => pizza.id === id))       
    }   
       
    return (
        <><section className="banner-section">
            <div></div>
        </section>
        <section className="menu-section">
            <div className="menu-section-div">
                {pizzas.map((pizzaInd, i) => <div className="pizza-card" key={i}> 
                    <div className='pizza-img' style={{backgroundImage:`url(${pizzaInd.img})`}}></div>
                    <div className='pizza-info'>
                        <h3>{pizzaInd.namecard}</h3>
                        <h4> $ {pizzaInd.price}</h4>
                    </div>
                    <div className='pizza-buttons'>
                        <button className='desc-button' onTouchMove={() => setId(pizzaInd.id)} 
                        onPointerEnter={() => setId(pizzaInd.id)} 
                        onClick={verMas}>                            
                            Ver más
                        </button>
                        <button className='carrito-button'
                        onClick={() => {setPizzaAgregada([...pizzaAgregada, {name:`${pizzaInd.namecard}`, price: `${pizzaInd.price}`,
                        imgs:`${pizzaInd.img}`, cantidad: 1, id:`${pizzaInd.id}`}]) 
                        setCarrito(true)}}> Añadir al carrito</button>
                    </div>
                </div>
                    
                
                )}
            </div>
        </section>
        </>
    )
}

export default Menu