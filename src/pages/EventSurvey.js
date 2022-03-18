import React from 'react';
import { Link } from 'react-router-dom';

const EventSurvey = () => {

	return (
		<div className='d-flex justify-content-center '>
			<div className="form-signin m-5 p-4 ">
				
				<div className="card-body text-center">
					<h1 >Encuesta</h1>
				</div>
				<form>
					<div className="form-floating input-group mb-3">
						<textarea className="form-control" id="comenarios"></textarea>
						<label htmlFor="comentarios">Comentarios</label>
					</div>
					<div className="input-group mb-3">
						<select className="form-select" id="satisfaccion">
							<option selected>Indicá tu satisfaccion con el evento</option>
							<option value="1">Excelente</option>
							<option value="2">Bueno</option>
							<option value="3">Regular</option>
							<option value="4">Malo</option>
						</select>
					</div>
					<div className="input-group mb-3">
						<select className="form-select" id="calificacion">
							<option selected>Como calificación del evento</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="input-group mb-3">
						<select className="form-select" id="recomendacion">
							<option selected>Recomendarias este producto</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</div>								
					<div className="d-flex justify-content-center gap-4 mt-4">
						<div className="">
							<button type="submit" className="btn btn-primary">Aceptar</button>
						</div>
						<div className="">
							<Link to="/" className="btn btn-primary">Cancelar</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EventSurvey;