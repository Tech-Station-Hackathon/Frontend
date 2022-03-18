import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram} from '@fortawesome/fontawesome-free-brands';



const Footer = () => {
	return (
		<footer className="footer mt-auto bg-dark pt-4 pb-4" id="footer">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-3">
						<h3 className="text-white">ACERCA DE</h3>
						<ul className="list-group mt-3">
							<li className="list-group-item bg-dark text-white">Compañia</li>
							<li className="list-group-item bg-dark text-white">Equipo</li>
							<li className="list-group-item bg-dark text-white">Inversores</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h3 className="text-white">ASISTENCIA</h3>
						<ul className="list-group mt-3">
							<li className="list-group-item bg-dark text-white">Somos Telecom</li>
							<li className="list-group-item bg-dark text-white">Enacom contacto@enacom.gob.ar</li>
							<li className="list-group-item bg-dark text-white">Oferta interconexión</li>
							<li className="list-group-item bg-dark text-white">Operadores moviles</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h4 className="text-white">CONFIANZA EN TUS COMPRAS</h4>
						<ul className="list-group mt-3">
							<li className="list-group-item bg-dark text-white">Política de Privacidad de Telecom</li>
							<li className="list-group-item bg-dark text-white">Política de Uso Aceptable de Servicios de Telecom</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h3 className="text-white">AYUDA</h3>
						<ul className="list-group mt-3">
							<li className="list-group-item bg-dark text-white">Contacto</li>
							<li className="list-group-item bg-dark text-white">Centro de Ayuda</li>
							<li className="list-group-item bg-dark text-white">Telefonía fija hogar</li>
						</ul>
					</div>
					<div className="col-12 text-center mt-3">
						<a href="#" className="ms-1 me-1 text-white"><FontAwesomeIcon icon={faInstagram}/></a>
						<a href="#" className="ms-1 me-1 text-white"><FontAwesomeIcon icon={faTwitter}/></a>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
