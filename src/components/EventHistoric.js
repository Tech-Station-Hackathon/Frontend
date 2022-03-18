import React from 'react';
const reproducirEvento = () => {

}; 
 
const EventHistoric = (evento) => {
	return (
		<>
			<br/><br/>
			<div className="card">
				<img src={evento.thumbnail} height={150} width={50} className="card-img-top" alt={evento.title} />
				<div className="card-body">
					<h5 className="card-title">{evento.title}</h5>
					<p className="card-text">{evento.description}</p>
					<button type="button" onClick={() => reproducirEvento()} className="btn btn-primary btn-sm add" >Reproducir Evento</button>
				</div>
			</div>
			<br/><br/>
		</>        
	);
};

export default EventHistoric;   