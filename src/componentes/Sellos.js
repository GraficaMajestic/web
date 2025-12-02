import React from "react";
import "../estilos/Sellos.css";
import sello from "../imagenes/sello.png";
import sello1 from "../imagenes/sello1.png";
import sello2 from "../imagenes/sello2.png";
import sello3 from "../imagenes/sello3.png";
import sello4 from "../imagenes/sello4.png";
import sello5 from "../imagenes/sello5.png";
import sello6 from "../imagenes/sello6.png";
import sello7 from "../imagenes/sello7.png";
import sello8 from "../imagenes/sello8.png";
import sello9 from "../imagenes/sello9.png";
import sello10 from "../imagenes/sello10.png";
import sello11 from "../imagenes/sello11.png";
import sello12 from "../imagenes/sello12.png";
import sello13 from "../imagenes/sello13.png";
import sello14 from "../imagenes/sello14.png";
import sello15 from "../imagenes/sello15.png";
import sello16 from "../imagenes/sello16.png";
import sello17 from "../imagenes/sello17.png";
import sello18 from "../imagenes/sello18.png";
import sello19 from "../imagenes/sello19.png";
import sello20 from "../imagenes/sello20.png";
import sello21 from "../imagenes/sello21.png";
import Swal from "sweetalert2";


function Sellos({ cart, setCart, total, setTotal }) {

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
      name: "Sello de Madera",
      image: sello,
      price: "S/10",
      p: "Medida: 47mm x 18mm",
    },
    {
      name: "Sello de Madera",
      image: sello1,
      price: "S/10",
      p: "Medida: 30mm x 30mm",
    },
    {
      name: "Sello de Bolsillo Trodat",
      image: sello2,
      price: "S/30",
      p: "Medida: 37mm x 14mm",
    },
    {
      name: "Sello Trodat 4911",
      image: sello3,
      price: "S/32",
      p: "Medida: 37mm x 14mm",
    },
    {
      name: "Sello Trodat 3911",
      image: sello4,
      price: "S/28",
      p: "Medida: 37mm x 14mm",
    },
    {
      name: "Sello Trodat 4912",
      image: sello5,
      price: "S/40",
      p: "Medida: 47mm x 18mm",
    },
    {
      name: "Sello Trodat 3912",
      image: sello6,
      price: "S/32",
      p: "Medida: 47mm x 18mm",
    },
    {
      name: "Sello Fechador Trodat 4810",
      image: sello7,
      price: "S/25",
      p: "Solo fecha",
    },
    {
      name: "Sello Trodat 4913",
      image: sello8,
      price: "S/45",
      p: "Medidas: 56mm x 21mm",
    },
    {
      name: "Sello Trodat 4914",
      image: sello9,
      price: "S/50",
      p: "Medidas: 64mm x 26mm",
    },
    {
      name: "Sello Shinny S-826D",
      image: sello10,
      price: "S/60",
      p: "Medidas: 41mm x 24mm",
    },
    {
      name: "Sello Shinny S-827D",
      image: sello11,
      price: "S/65",
      p: "Medidas: 50mm x 30mm",
    },
    {
      name: "Sello Shinny S-828D",
      image: sello12,
      price: "S/70",
      p: "Medidas: 56mm x 33mm",
    },
    {
      name: "Sello Shinny S-829D",
      image: sello13,
      price: "S/75",
      p: "Medidas: 62mm x 38mm",
    },
    {
      name: "Sello de Billete Trodat 4612",
      image: sello14,
      price: "S/30",
      p: "Medidas: 9mm x 9mm",
    },
    {
      name: "Sello Redondo Trodat 4642",
      image: sello15,
      price: "S/55",
      p: "Medidas: 42mm x 42mm",
    },
    {
      name: "Sello Redondo Trodat 4630",
      image: sello16,
      price: "S/45",
      p: "Medidas: 30mm x 30mm",
    },
    {
      name: "Sello Cuadrado Shinny S-530",
      image: sello17,
      price: "S/45",
      p: "Medidas: 30mm x 30mm",
    },
    {
      name: "Tinta Trodat",
      image: sello18,
      price: "S/16",
      p: "Variedad de colores",
    },
    {
      name: "Tinta Indeleble Shinny",
      image: sello19,
      price: "S/20",
      p: "Para superficies de plastico",
    },
    {
      name: "Almohadillas para Sellos",
      image: sello20,
      price: "S/20",
      p: "Repuesto solo para algunos",
    },
    {
      name: "Tampon Pequeño Layconsa",
      image: sello21,
      price: "S/5",
      p: "Medidas: 60mm x 40mm",
    },

  ];


  return (

    <div id="menu">
      <div className="barra">
        <h1>LOS SELLOS MAS VENDIDOS</h1>
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
export default Sellos;