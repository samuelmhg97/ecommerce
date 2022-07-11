import React from "react";
import './styles/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'




function Footer() {
 return (
   <footer className="footer">
       <div className="container">
          <div className="row">
             <div className="column">
               <h4>Empresa</h4>
               <ul >
                  <li><a href="#">Quienes somos</a></li>
                  <li><a href="#">Tarifas</a></li>
                  <li><a href="#">Nuestros servicios</a></li>
                  <li><a href="#">Trabaja con nosotros</a></li>
               </ul>
             </div>
          <div className="column">
               <h4>Ayuda</h4>
               <ul >
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Envios</a></li>
                  <li><a href="#">Politica de devolucion</a></li>
                  <li><a href="#">Opciones de pago</a></li>
              </ul>
          </div> 
          <div className="column">
               <h4>Legales</h4>
               <ul >
                  <li><a href="#">Terminos y condiciones</a></li>
                  <li><a href="#">Politica de privacidad</a></li>
                  <li><a href="#">Defensa del consumidor</a></li>
                  <li><a href="#">Informacion al usuario financiero</a></li>
               </ul>
          </div>
          <div className="column">
               <h4>Seguinos!</h4>
               <div className="redes">
                  <a href="#" className="facebook"><FontAwesomeIcon  icon={faFacebook} ></FontAwesomeIcon></a>
                  <a href="#" className="instagram"><FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon></a>
                  <a href="#" className="youtube" ><FontAwesomeIcon  icon={faYoutube}></FontAwesomeIcon></a>
                  <a href="#" className="twitter" ><FontAwesomeIcon  icon={faTwitter}></FontAwesomeIcon></a>

               </div>
          </div>  


          </div>

        

       </div>

   </footer> 
 
  );
};

export default Footer;