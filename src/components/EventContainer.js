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
<<<<<<< HEAD
			<div className="container">
=======
			<div className="container mb-4">
>>>>>>> a60525184160e4e36877aaf5a74abd2729956908
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
										isonline={evento.isonline}
										ispresential={evento.ispresential}
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