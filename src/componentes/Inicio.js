import React from "react";
import "../estilos/Inicio.css";
import modelo from "../imagenes/modelo.png";
import centro from "../imagenes/centro.png";
import centro1 from "../imagenes/centro1.png";
import agenda from "../imagenes/agenda.png";
import baner from "../imagenes/flyer-baner.jpeg";
import uvdtf from "../imagenes/flyer-dtf.jpeg";
import calen from "../imagenes/flyer-agenda.jpeg";

function Inicio(){
    return(

        <article className="contenedor-article">

            <section className="texto-diseño">
                <div>
                    <div className="letras1">TUS DISEÑOS</div>
                    <div className="letras2">Crean una Historia</div>
                    <div className="letras3">MEJOR</div>
                </div>
                <div>
                    <img src={modelo} className="imagen-modelo" alt="modelo" />
                </div>                
            </section>

            <section className="collage">

            </section>

            <section className="dos-imagen">

                <img src={centro} className="centro" alt="centro" />
                <img src={centro1} className="centro" alt="centro" />

            </section>
            

            <div className="flyers">

            <section className="flyer">                
                <div>
                    <img src={uvdtf} className="uvdtf" alt="uvdtf" />
                </div>
            </section>

             <section className="flyer">                
                <div>
                     <img src={baner} className="baner" alt="baner" />
                </div>
            </section>

            <section className="flyer">
                <div>
                     <img src={calen} className="calen" alt="calen" />
                </div>
            </section>
           
           </div>

        </article>
    );
}
export default Inicio;