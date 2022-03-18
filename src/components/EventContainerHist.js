// Contenedor de Eventos Historicos
import React from 'react';
import EventHistoric from './EventHistoric';
import { useState, useEffect } from 'react';

const EventContainerHist = () => {
	const [eventos, setEventos] = useState({});

	useEffect(() => {
		let getEvents = async () => {
			let response = await fetch('https://techstationhackathon.herokuapp.com/api/events');
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
					<div className="col-3">
					</div>
					<div className="col-6">
						{
							eventos.length > 0
								? eventos.map((evento) =>
									<EventHistoric key={evento.id}
										id={evento.id}
										title={evento.title}
										thumbnail={evento.thumbnail}
										description={evento.description}
									/>
								)
								: <p>&nbsp;Cargando Información... Espere un momento por favor...</p>
						}
					</div>
					<div className="col-3">
					</div>
				</div>
			</div>
		</>
	);
};

export default EventContainerHist;
