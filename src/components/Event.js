import React from 'react';

const Event = (evento) => {
	return (
		<>
			<br/><br/>
			<div className="card">
				<img src={evento.thumbnail} height={150} width={50} className="card-img-top" alt={evento.title} />
				<div className="card-body">
					<h5 className="card-title">{evento.title}</h5>
					<p className="card-text">{evento.description}</p>
					<p className="card-text">Fecha del Evento: {evento.datetime}</p>
				</div>
			</div>
			<br/><br/>
		</>        
	);
};

export default Event;   