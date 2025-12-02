import React from "react";
import "../estilos/Publicidad.css";
import publi from "../imagenes/publi.png";
import publi1 from "../imagenes/publi1.png";
import publi2 from "../imagenes/publi2.png";
import publi3 from "../imagenes/publi3.png";
import publi4 from "../imagenes/publi4.png";
import publi5 from "../imagenes/publi5.png";
import publi6 from "../imagenes/publi6.png";
import publi7 from "../imagenes/publi7.png";
import publi8 from "../imagenes/publi8.png";
import publi9 from "../imagenes/publi9.png";
import publi10 from "../imagenes/publi10.png";
import publi11 from "../imagenes/publi11.png";
import publi12 from "../imagenes/publi12.png";
import publi13 from "../imagenes/publi13.png";
import publi14 from "../imagenes/publi14.png";
import publi15 from "../imagenes/publi15.png";
import publi16 from "../imagenes/publi16.png";
import publi17 from "../imagenes/publi17.png";
import publi18 from "../imagenes/publi18.png";
import publi19 from "../imagenes/publi19.png";
import Swal from "sweetalert2";


function Publicidad({ cart, setCart, total, setTotal }) {

    // Agregar al carrito
  const addToCart = (menus) => {
    const priceNumber = parseFloat(menus.price.replace("S/", ""));
    
    const productoInCart = cart.find((item) => item.name === menus.name);
    
    if (productoInCart) {
      const updatedCart = cart.map((item) =>
        item.name === menus.name
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...menus, cantidad: 1, price: priceNumber }]);
    }
    
    // Actualizar el total
    setTotal(total + priceNumber);
  Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1200, // desaparece después de 1.2 segundos
        toast: true,
      });
};


  const menu = [
    {
      name: "Volantes Couche 1/4 oficio",
      image: publi,
      price: "S/80",      
      p: "Cantidad 1000 und.",
    },
    {
      name: "Tarjetas Pesonales",
      image: publi1,
      price: "S/80",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Brochure A4 (2 cuerpos)",
      image: publi2,
      price: "S/1600",
      p: "Cantidad 1000 Unid.",
    },
    {
      name: "Gigantografia + tubos",
      image: publi3,
      price: "S/20",
      p: "Medida: 1m x 1m",
    },
    {
      name: "Gigantografia + Caballete",
      image: publi4,
      price: "S/110",
      p: "Medida: 1.55m x 70cm",
    },
    {
      name: "Gigantografia + Marco de madera",
      image: publi5,
      price: "S/60",
      p: "Medida: 1.5m x 90cm",
    },
    {
      name: "Gigantografia + Rollscreen",
      image: publi6,
      price: "S/90",
      p: "Medida: 2m x 1m",
    },
    {
      name: "Gigantografia + Parante metal",
      image: publi7,
      price: "S/70",
      p: "Medida: 2m x 1m",
    },
    {
      name: "Vinil adhesivo",
      image: publi8,
      price: "S/40",
      p: "Medidas: 1m x 1.5m",
    },
    {
      name: "Vinil laminado + Troquel",
      image: publi9,
      price: "S/80",
      p: "Medidas: 1.45m x 95cm",
    },
    {
      name: "Sticker adhesivo",
      image: publi10,
      price: "S/280",
      p: "Medidas: 108mm x 165mm",
    },
    {
      name: "Imantados publicitarios",
      image: publi11,
      price: "S/350",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "fotocheck enmicado",
      image: publi12,
      price: "S/15",
      p: "Medidas: 89mm x 49mm",
    },
    {
      name: "Fotocheck PVC",
      image: publi13,
      price: "S/20",
      p: "Medidas: 89mm x 49mm",
    },
    {
      name: "Llaveros de recuerdo",
      image: publi14,
      price: "S/90",
      p: "Cantidad 100 unid.",
    },
    {
      name: "Carta menu enmicado A4",
      image: publi15,
      price: "S/15",
      p: "Medidas: 210mm x 297mm",
    },
    {
      name: "Tazas personalizadas",
      image: publi16,
      price: "S/25",
      p: "Tamaño de 7oz",
    },
    {
      name: "Tomatodo personalizado 750 ml",
      image: publi17,
      price: "S/700",
      p: "Cantidad 100 unid.",
    },
    {
      name: "Llaveros metalicos",
      image: publi18,
      price: "S/250",
      p: "Cantidad 100 unid.",
    },
    {
      name: "Lanyards personalizados",
      image: publi19,
      price: "S/230",
      p: "Cantidad 100 unid.",
    },
    
  ];


    return (

       <div id="menu">      
          <div className="barra">
            <h1>TODO TIPO DE PUBLICIDAD</h1>           
          </div>      

      <div className="menu-cards">
        {menu.map((menus) => (
          <div key={menus.name} className="menu-card">
            <img src={menus.image} alt={menus.name} />
            <article className="menu-about">
              <div className="menu-name">
                <strong>{menus.name}</strong>
                {menus.p}
                <strong>{menus.price}</strong>
              </div>
              <div>
                <button onClick={() => addToCart(menus)}>
                  Agregar al carrito
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>

    );
}
export default Publicidad;