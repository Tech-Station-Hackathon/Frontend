// Contenedor de Eventos Historicos
import React from 'react';
import EventHistoric from './EventHistoric';

const eventos = [
	{
		id: 1,
		title: 'Nuevos modelos de Telefonos Celulares con VoLTE',
		thumbnail: require('../assets/Carrusel1.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
	},
	{
		id: 2,
		title: 'Introduccion a IOT',
		thumbnail: require('../assets/Carrusel2.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
	},
	{
		id: 3,
		title: 'Conectividad 4G para Grandes Empresas',
		thumbnail: require('../assets/Carrusel3.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
	}
];

const EventContainerHist = () => {
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
								: <p>&nbsp;Espere un momento por favor...</p>
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