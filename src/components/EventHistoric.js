// Detalle del Evento Historico
import React from 'react';
import { Link } from 'react-router-dom';

const EventHistoric = (evento) => {
	return (
		<>
			<br/><br/>
			<div className="card">
				<img src={evento.thumbnail} height={150} width={50} className="card-img-top" alt={evento.title} />
				<div className="card-body">
					<h5 className="card-title">{evento.title}</h5>
					<p className="card-text">{evento.description}</p>
					<Link to="/media" className="btn btn-primary add btn-sm">Reproducir Evento</Link>
				</div>
			</div>
			<br/><br/>
		</>        
	);
};

export default EventHistoric;   