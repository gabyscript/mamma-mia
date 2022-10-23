
import "./Carrito.css";

import { useContext } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import myContext from '../../Context/Context'


const Carrito = () => {    

    const {pizzaAgregada, setPizzaAgregada, carrito, setCarrito} = useContext(myContext);
    const [id, setId] = useState();
    const navigate = useNavigate();    
    
   
    const eliminarCompra = () => {
        const index = pizzaAgregada.findIndex( (x) => x.id === id)
        setPizzaAgregada([...pizzaAgregada.slice(0, index), ...pizzaAgregada.slice(index + 1 )])

        if (pizzaAgregada === []) {
            setCarrito(false)
            return
        }             
               
    }

    const comprarCarrito = () => {
        alert("La compra se ha efectuado de manera correcta") 
        setPizzaAgregada([]);
        setCarrito(false)
        navigate(`/menu`) 
    }
     
    

    return (

        <section className="carrito-section">
            {carrito ? <div className="carrito-div">
                {pizzaAgregada.map((pizzaInd, i) =>
                <div key={i} className="pizza-agregada-div">
                    <div className="pizza-agregada-img"
                    style={{backgroundImage:`url(${pizzaInd.imgs})`}}>
                    </div>
                    <div className="pizza-agregada-info">
                        <h5>{pizzaInd.name}</h5>
                    </div>
                    <div className="pizza-agregada-buttons">
                        <button className="eliminar-button" onPointerEnter={() => setId(pizzaInd.id)} onClick={eliminarCompra}> 🗑 </button>
                        <select className="cantidad-select" onPointerEnter={() => setId(pizzaInd.id)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                                           
                    </div>
                    <div className="pizza-agregada-subtotal">
                        <h5>Subtotal : $ {pizzaInd.price}</h5>

                    </div>
                    
                </div>)}                
                <div className="carrito-total">
                    <h5>Total: $ {pizzaAgregada.reduce((a,b) => a + Number(b.price), 0)}</h5>
                </div>
                <div className="comprar-div">
                    <button className="pagar-button" onClick={comprarCarrito}> Pagar </button>
                </div> 
            </div>: null}
            
        </section>
        
        
    )
}

export default Carrito