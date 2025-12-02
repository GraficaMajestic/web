import React from "react";
import "../estilos/Footer.css";
import face from "../imagenes/face.png";
import insta from "../imagenes/insta.png";
import wasap from "../imagenes/wasap.png";
import logo from "../imagenes/logo.png";

function Footer(){
    return(

        <div className="contenedor-footer">

            <div className="contenedor-logo-lista">

                <div className="contenedor-logo">
                    <img src={logo} className="logo" alt="logito"/>
                </div>


                <div className="contenedor-lista">
                    <ul>
                        <li><a className="titulo-enlace">SOBRE NOSOTROS</a></li><br></br>
                        <li><a href="">Locales</a></li>
                        <li><a href="">Términos y Condiciones</a></li>
                        <li><a href="">Politicas de Privacidad</a></li>
                    </ul>

                    <ul>
                        <li><a className="titulo-enlace">SERVICIO AL CLIENTE</a></li><br></br>
                        <li><a href="">Libro de Reclamaciones</a></li>
                        <li><a href="">Comprobante Eléctronico</a></li>
                        <li><a href="">Preguntas Frecuentes</a></li>
                    </ul>

                    <ul>
                        <li><a className="titulo-enlace">CONTÁCTANOS</a></li><br></br>
                        <li><a href="">+51 983480623</a></li>
                        <li><a href="">imprenta_majestic@gmail.com</a></li>
                        <li><a href="">Av. Tupac Amaru 5565 Km 12.5 - Comas</a></li>
                    </ul>
                </div>

            </div>


            <div className="contenedor-redes">
                <div className="derechos">
                    <p>Copyright todo los derechos reservados - Grafica Majestic 2025</p>
                </div>

                <div className="logos-redes">
                    <img src={face} className="redes" alt="facebook"/>
                    <img src={insta} className="redes" alt="instagram"/>
                    <img src= {wasap} className="redes" alt="whatsapp" />
                </div>                
            </div>

        </div>
    );
}
export default Footer;
