import './App.css';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Nosotros from './componentes/Nosotros';
import Sellos from './componentes/Sellos';
import Publicidad from './componentes/Publicidad';
import Formatos from './componentes/Formatos';
import Carrito from './componentes/Carrito';
import WhatsappButton from './componentes/WhatsappButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">

      <BrowserRouter>
      
      <NavBar cart={cart} />
      <Header/>

      <Routes>
          <Route path='/' element={ <Inicio/> } />  
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/sellos' element={<Sellos cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
          <Route path='/publicidad' element={<Publicidad cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
          <Route path='/formatos' element={<Formatos cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
          <Route path='/carritobuy' element={ <Carrito cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
      </Routes>
        
      
      <Footer/>

      <WhatsappButton />

      </BrowserRouter>
     
    </div>
  );
}         

export default App;
