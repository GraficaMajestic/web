import React from "react";
import "../estilos/NavBar.css";
import wasap from "../imagenes/wasap.png";
import fijo from "../imagenes/fijo.png";
import logo from "../imagenes/logo.png";
import carrito from "../imagenes/carrito.png"
import { Link } from "react-router-dom";

function NavBar({ cart = [] }) {

 const count = cart.length;

    return (
        <nav className="contenedor-navbar">

            <div className="textos-navbar">
                <div className="textos-inner">
                    <div className="textos-left">

                            <img src={wasap} className="icono" alt="wasap" />
                            
                        <div className="contenedor-wasap">
                            <a className="link-wasap" href="https://wa.me/51983480623" target="_blank" rel="noreferrer">
                                <p className="wasap-text">Escríbenos al WhatsApp</p>
                            </a>
                        </div>

                            <img src={fijo} className="icono" alt="fijo" />
        
                        <div className="contenedor-fijo">
                            <p className="telefono">Llámanos al: 01 454 9031</p>
                        </div>
                    </div>

                     <div className="textos-right carrito-container">
                        <Link to="/carritobuy" className="carrito-wrapper">
                            <img src={carrito} className="icono-carrito" alt="carrito" />
                            {count > 0 && (
                                <span className="carrito-num">{count}</span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>


            <div className="contenedor-menu">

                <div>
                    <Link to="/"><img src={logo} className="icono-logo" alt="logo" /></Link>
                </div>

                <ul>
                    <li><Link className="link-menu" to="/">Inicio</Link></li>
                    <li><Link className="link-menu" to="/sellos">Sellos</Link></li>
                    <li><Link className="link-menu" to="/publicidad">Publicidad</Link></li>
                    <li><Link className="link-menu" to="/formatos">Formatos</Link></li>
                    <li><Link className="link-menu" to="/nosotros">Nosotros</Link></li>
                </ul>

                <div className="buscar">
                    <input className="busca" type="text" placeholder="Buscar" />
                    <input className="boton" type="button" value="Buscar" />
                </div>

            </div>

        </nav>

    );
}
export default NavBar;