// Detalle del Evento para usuarios registrados
import React from 'react';

const registerOnline = () => {

};

const registerPresential = () => {

};

const parseDateTime = (date) => {
	return `${date.getDate()}/${date.getMonth()}/${date.getYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const EventRegistered = (evento) => {
	return (
		<>
			<br/><br/>
			<div className="card">
				<img src={evento.thumbnail} height={150} width={50} className="card-img-top" alt={evento.title} />
				<div className="card-body">
					<h5 className="card-title">{evento.title}</h5>
					<p className="card-text">{evento.description}</p>
					<p className="card-text">Fecha del Evento: {parseDateTime(new Date(evento.date))}</p>
					{evento.isonline
						? <button type="button" onClick={() => registerOnline()} className="btn btn-primary btn-sm add" >Inscribirse Online</button>
						: <div></div>
					}
					&nbsp;&nbsp;&nbsp;
					{evento.ispresential
						? <button type="button" onClick={() => registerPresential()} className="btn btn-primary btn-sm add" >Inscribirse Presencial</button>
						: <div></div>
					}
				</div>
			</div>
			<br/><br/>
		</>        
	);
};

export default EventRegistered;   