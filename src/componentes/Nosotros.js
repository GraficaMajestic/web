import React from "react";
import "../estilos/Nosotros.css";
import mision from "../imagenes/mision.png";

function Nosotros() {

    return (
        <section className="contenedor-nosotros">

            <div className="contenedor-mision-vision">

                <div className="mision-vision">
                    <div className="mision">MISION</div>
                    <div className="concepto">
                        En Gráfica Majestic ofrecemos servicios de impresión y diseño de alta calidad.<br></br>
                        Creamos soluciones personalizadas en públicidad y material gráfico para él cliente.<br></br>
                        Nuestro compromiso es brindar creatividad, puntualidad y precios comodos.<br></br>
                        Trabajamos para impulsar la imagen y comunicación de negocios y personas.<br></br>
                    </div>
                    <div className="vision">VISION</div>
                    <div className="concepto">
                        Ser conocidos como un negocio confiable y responsable en el mercado local.<br></br>
                        Inspirar confianza al transformar ideas en publicidades de gran impacto.<br></br>
                        Convertirnos en aliados estratégicos para empresas, marcas y emprendedores.<br></br>
                        Crecer con creatividad y calidad, dejando huella en cada diseño.<br></br>
                    </div>

                </div>

                <div className="foto-mision">
                    <img src={mision} className="" alt=""></img>
                </div>

            </div>

            <div className="contenedor-sede">

                <div className="encuentranos">
                    <div className="encuentra">ENCUENTRANOS EN:</div>
                    <div className="concepto">
                        Acercate a nuestro local, donde podras ver tus ideas<br></br>
                        como empezaran a tomar forma y creatividad, diseños<br></br>
                        personalizados, impresiones en calidad y estamos<br></br>
                        comprometidos a que tus diseños sean de calidad.<br></br>
                    </div>
                    <div className="horarios">
                        <li>Av. Tupac Amaru 5565 Km 12 - Comas</li>
                        <li>Lunes a Viernes de 9:30 AM a 7:00 PM</li>
                        <li>Sábados de 9:30 AM a 2:00 PM</li>
                        <li>Informes: +51 983 480 623</li>
                    </div>
                </div>

                <div className="mapa" aria-hidden={false}>
                    <iframe
                        title="Mapa Imprenta Majestic"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.058222088376!2d-77.05048398360722!3d-11.947192436051271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d02ea107d74b%3A0x3bd04aa7c30c21fd!2sImprenta%20Majestic!5e0!3m2!1ses!2spe!4v1758501031690!5m2!1ses!2spe"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        style={{ border: 0 }}
                    />
                </div>
            </div>

        </section>
    );
}
export default Nosotros;