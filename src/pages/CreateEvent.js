import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CreateEvent = () => {
	const [eventCreate, setEventCreate] = useState({});

	const handleForm = (event) => {
		event.preventDefault();
		console.log(eventCreate);
	};

	const handleChangeUser = ({ name, value }) => {
		if (name === 'date') {
			let dateInput = new Date(value);
			let dateNow = Date.now();
			if (dateNow < dateInput) {
				setEventCreate({ ...eventCreate, [name]: value.toString() });
			}
			else {
				setEventCreate({ ...eventCreate, [name]: 0 });

			}
		}
		else
			setEventCreate({ ...eventCreate, [name]: value.toString() });
	};



	return (
		<div className='d-flex justify-content-center '>
			<form
				className="form-signin m-2 p-4 "
				onSubmit={handleForm}
				onChange={({ target }) => handleChangeUser(target)}>
				<h1>Creador de eventos</h1>
				<div className="input-group mb-3 mt-4">
					<input type="date" name="date" id="date" min="2022-03-18" max="2022-12-31" required />
				</div>

				<div className="input-group mb-3">
					<input type="file" accept="video/*" name="file" className="form-control" id="inputGroupFile01" />
				</div>

				<div className="form-floating input-group mb-3">
					<select className="form-select" id="inputGroupSelect01" name="event" required>
						<option selected>Elegir...</option>
						<option value="online">Online</option>
						<option value="presencial">Presencial</option>
					</select>
					<label htmlFor="inputGroupSelect01">Tipo de evento</label>

				</div>
				<div className="form-floating">
					<textarea className="form-control" id="floatingTextarea2" name="description" required></textarea>
					<label htmlFor="floatingTextarea2">Comentarios</label>
				</div>
				<div className="d-flex justify-content-center gap-4 mt-4">
					<div className="">
						<button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Subir</button>
					</div>
					<div className="">
						<button type="reset" className="btn btn-primary">Limpiar</button>
					</div>
					<div className="">
						<Link to="/" className="btn btn-primary">Cancelar</Link>
					</div>
				</div>
			</form>

			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Evento creado con éxito!</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;
