import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/AlertStyle.css';

const AlertEvent = (evento) => {
	const [showA, setShowA] = useState(true);
	const toggleShowA = () => setShowA(!showA);

	return (
		<>		
			<ToastContainer position='middle-center' style={{zIndex:1}}>
				<Toast bg='info' show={showA} onClose={toggleShowA}>
					<Toast.Header>
						<strong className="me-auto">Eventos TECO</strong>
						{
							evento.diff < 90
								? <small>faltan {evento.diff} mins</small>
								: <div></div>
						}
					</Toast.Header>
					<Toast.Body>Hoy es el dia del evento &quot;{evento.evento}&quot;</Toast.Body>
					{
						evento.diff < 10
							?
							<div className="toastBody">
								<Link to="/media" className="btn btn-primary add btn-sm">Acceder a la Sala</Link>
							</div>
							: 
							<Toast.Body>Podrá acceder a la sala cuando falten 10 minutos para comenzar.</Toast.Body>
					}
				</Toast>
			</ToastContainer>
		</>
	);
};

export default AlertEvent;