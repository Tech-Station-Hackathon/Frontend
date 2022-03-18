import React, { useContext } from 'react';
import { userContext } from '../context/UserContext';

const Event = (evento) => {
	const { isLogin } = useContext(userContext);

	const registerOnline = () => {

	};

	const registerPresential = () => {

	};
	return (
		<div className="card mt-5">
			<img src={evento.thumbnail} height={150} width={50} className="card-img-top" alt={evento.title} />
			<div className="card-body text-center">
				<h5 className="card-title fw-bold">{evento.title}</h5>
				<p className="card-text " >{evento.description}</p>
				<p className="card-text ">Fecha del Evento: {evento.datetime}</p>
				{isLogin() ?
					<div className='d-flex gap-5 justify-content-center'>
						{evento.isonline ?
							<button type="button" onClick={() => registerOnline()} className="btn btn-primary btn-sm add" >Inscribirse Online</button>
							: <></>
						}
						{
							evento.ispresential ?
								<button type="button" onClick={() => registerPresential()} className="btn btn-primary btn-sm add" >Inscribirse Presencial</button>
								: <></>
						}
					</div>
					: <></>
				}
			</div>
		</div>
	);
};

export default Event;   