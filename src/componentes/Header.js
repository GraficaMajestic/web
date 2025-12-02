import React from "react";
import { motion } from "framer-motion";
import "../estilos/Header.css";
import baner1 from "../imagenes/todobaner.png";

function Header() {

    return (
        /* instalamos esto para usar framer-motion: npm install framer-motion */
        <header className="contenedor-header">

            <motion.div className="contenedor-textos">                

                <div className="titulo1">PERSONALIZA</div>
                <div className="titulo2">Tus Ideas</div>
                <div className="descripcion">Volantes, Tarjetas, Banners, Vinil, Sellos, Stickers</div>
            </motion.div>

            <div className="contenedor-imagenes">

                <img src={baner1} className="imagen-baner1" alt="baner1" />
              
            </div>


        </header>

    );

}
export default Header;