// Contenedor de Eventos para usuarios sin registrarse
import React from 'react';
import Event from './Event';
import { useState, useEffect } from 'react';

const EventContainer = () => {
	const [eventos, setEventos] = useState({});

	useEffect(() => {
		let getEvents = async () => {
			let response = await fetch('http://techstationhackathon.herokuapp.com/api/events');
			let dataEvent = await response.json();
			setEventos(dataEvent);
		};
		getEvents();
	},[]);

	return (
		<>
			<br/><br/>
			<div className="container">
				<div className="row">
					<div className="col-0 col-md-2">
					</div>
					<div className="col-12 col-md-8">
						{
							eventos.length > 0
								? eventos.map((evento) =>
									<Event key={evento.id}
										id={evento.id}
										title={evento.title}
										thumbnail={evento.thumbnail}
										description={evento.description}
										date={evento.date}
										isonline={evento.isOnline}
										ispresential={evento.isPresential}
									/>
								)
								: <p>&nbsp;Cargando Información... Espere un momento por favor...</p>
						}
					</div>
					<div className="col-0 col-md-2">
					</div>
				</div>
			</div>
		</>
	);
};

export default EventContainer;