import React from 'react';
import Carrusel from '../components/Carrusel';
import EventContainerRegistered from '../components/EventContainerRegistered';
import AlertEvent from '../components/AlertEvent';
import moment from 'moment';
import { useState } from 'react';

const HomeRegistered = () => {
	let eventdate = moment('18-03-2022 11:00:00', 'DD-MM-YYYY HH:mm:ss');
	let currentdate = moment('18-03-2022 10:54:00', 'DD-MM-YYYY HH:mm:ss');
	let difference = eventdate.diff(currentdate, 'm');
	const [diffTime] = useState(difference);
	return (
		<>
			<Carrusel />
			<AlertEvent evento="Introduccion a IOT" diff={diffTime}/>
			<EventContainerRegistered />			
		</>
	);
};

export default HomeRegistered;