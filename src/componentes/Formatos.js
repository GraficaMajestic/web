import React from "react";
import "../estilos/Formatos.css";
import doc1 from "../imagenes/doc1.png";
import doc2 from "../imagenes/doc2.png";
import doc3 from "../imagenes/doc3.png";
import doc4 from "../imagenes/doc4.png";
import doc5 from "../imagenes/doc5.png";
import doc6 from "../imagenes/doc6.png";
import doc7 from "../imagenes/doc7.png";
import doc8 from "../imagenes/doc8.png";
import doc9 from "../imagenes/doc9.png";
import doc10 from "../imagenes/doc10.png";
import doc11 from "../imagenes/doc11.png";
import doc12 from "../imagenes/doc12.png";
import Swal from "sweetalert2";


function Formatos({ cart, setCart, total, setTotal }) {

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
      name: "Recibo de ingresos 1/4 oficio",
      image: doc1,
      price: "S/80",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Boleta de venta 1/4 oficio",
      image: doc2,
      price: "S/80",
      p: "Cantidad 1000 unid.",
    },    
    {
      name: "Nota de venta 1/4 oficio",
      image: doc3,
      price: "S/80",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Contrato o proforma 1/2 oficio",
      image: doc4,
      price: "S/150",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Rifas",
      image: doc5,
      price: "S/65",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Tarjeta de control ",
      image: doc6,
      price: "S/90",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Cuaderno de control",
      image: doc7,
      price: "S/250",
      p: "Cantidad 100 unid.",
    },
    {
      name: "Folder publicitario",
      image: doc8,
      price: "S/1200",
      p: "Cantidad 1000 unid.",
    },
    {
      name: "Servicio de anillados",
      image: doc9,
      price: "S/5",
      p: "Cada 100 hojas",
    },
    {
      name: "Diplomas personalizadas",
      image: doc10,
      price: "S/260",
      p: "Cantidad 100 unid.",
    },
    {
      name: "Tarjetas de invitacion",
      image: doc11,
      price: "S/50",
      p: "Cantidad 100 unid.",
    },
    {
      name: "Programas festivos",
      image: doc12,
      price: "S/560",
      p: "Cantidad 1000 unid.",
    },
    

  ];


    return (

      <div id="menu">
          <div className="barra">
            <h1>FORMATOS MAS REQUERIDOS</h1>           
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
export default Formatos;