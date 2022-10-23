import './Pizza.css';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import myContext from '../../Context/Context';

const Pizza = () => {


    const {pizzaDetalle, setPizzaDetalle, pizzaAgregada, setPizzaAgregada, carrito, setCarrito} = useContext(myContext)    
    const {id} = useParams();

    const navigate = useNavigate();

    const volverMenu = () => {
        setPizzaDetalle([]);
        navigate(`/menu`) 
    }
    

    return (
        <section className="pizza-section">            
            {pizzaDetalle.map(pizzaInd => 
                <div className='pizza-div'>
                    <div className='detalle-img' style={{backgroundImage:`url(${pizzaInd.img})`}}></div>                   
                    <div className='detalle-info'>
                        <div className='detalle-nombre-precio'>
                            <h3>{pizzaInd.namecard}</h3>
                            <h4> $ {pizzaInd.price}</h4>
                        </div>
                        <p className='pizza-desc'>{pizzaInd.desc}</p>                        
                    
                        <div className='detalle-ingredientes'>
                            <h5> 🍕 {pizzaInd.ingredients[0]}</h5>
                            <h5> 🍕 {pizzaInd.ingredients[1]}</h5>
                            <h5> 🍕 {pizzaInd.ingredients[2]}</h5>
                            <h5> 🍕 {pizzaInd.ingredients[3]}</h5>
                        </div>
                        
                        <div className='detalle-button'>
                            <button className='agregar-button'
                            onClick={() => {setPizzaAgregada([...pizzaAgregada, {name:`${pizzaInd.namecard}`, price: `${pizzaInd.price}`,
                            imgs:`${pizzaInd.img}`, cantidad: 1, id:`${pizzaInd.id}`}]) 
                            setCarrito(true)}}> Añadir al carrito</button>  
                            <button className='menu-button'
                            onClick={volverMenu}> Volver al menú</button> 
                        </div>
                        
                    </div>                        
                    
                </div>                  
            )}
            
        </section>
    )
}

export default Pizza

