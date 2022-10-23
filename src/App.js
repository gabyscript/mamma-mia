import NavBar from "./Componentes/NavBar/NavBar";
import Footer from "./Componentes/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import Menu from "./Views/Menu/Menu";
import Pizza from "./Views/Pizza/Pizza";
import Carrito from "./Views/Carrito/Carrito";
import NotFound from "./Views/NotFound/NotFound";
import pizzasContext from './Context/Context';

function App() {

  const [pizzaAgregada, setPizzaAgregada] = useState([]);
  const [pizzaDetalle, setPizzaDetalle] = useState([]);
  const [carrito, setCarrito] = useState(false)
  const estadoGlobal = {pizzaAgregada, setPizzaAgregada, pizzaDetalle, setPizzaDetalle, carrito, setCarrito};

  return (
    <div className="App">
      <pizzasContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <NavBar />          

          <Routes>
            <Route exact path="/" element={ < Navigate to="/menu" />} />
            <Route path="/menu" element = {<Menu />}></Route>
            <Route path="pizzas/:id" element = {<Pizza />}></Route>          
            <Route path="/carrito" element = {<Carrito />}></Route>
            <Route path="*" element = {<NotFound />}></Route>

          </Routes>
          <Footer />

        </BrowserRouter>
      </pizzasContext.Provider>
      
      
    </div>
  );
}

export default App;
