import EventRegistered from './EventRegistered';

const eventos = [
	{
		id: 1,
		title: 'Nuevos modelos de Telefonos Celulares con VoLTE',
		thumbnail: require('../assets/Carrusel1.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		datetime: '29/03/2022 17:30hs',
		isonline: true,
		ispresential: true
	},
	{
		id: 2,
		title: 'Introduccion a IOT',
		thumbnail: require('../assets/Carrusel2.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		datetime: '30/03/2022 17:30hs',
		isonline: true,
		ispresential: false
	},
	{
		id: 3,
		title: 'Conectividad 4G para Grandes Empresas',
		thumbnail: require('../assets/Carrusel3.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		datetime: '04/04/2022 10:30hs',
		isonline: false,
		ispresential: true
	},
	{
		id: 4,
		title: 'Introduccion a la tecnologia 5G',
		thumbnail: require('../assets/Carrusel4.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		datetime: '08/04/2022 10:00hs',
		isonline: true,
		ispresential: false
	}
];

const EventContainerNext = () => {
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
									<EventRegistered key={evento.id}                                        
										id={evento.id}
										title={evento.title}
										thumbnail={evento.thumbnail}
										description={evento.description}
										datetime={evento.datetime}
										isonline={evento.isonline}
										ispresential={evento.ispresential}
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

export default EventContainerNext;