import React from 'react';
import { Link } from 'react-router-dom';


const CreateEvent = () => {


	return (
		<div className='d-flex justify-content-center '>
			<form className="form-signin m-5 p-4 ">
				<div className="input-group mb-3">
					<input type="date" name="" id="" />
				</div>

				<div className="input-group mb-3">
					<input type="file" accept="video/*" className="form-control" id="inputGroupFile01" />
				</div>

				<div className="input-group mb-3">
					<select className="form-select" id="inputGroupSelect01">
						<option selected>Elegir...</option>
						<option value="1">Online</option>
						<option value="2">Presencial</option>
					</select>
				</div>
				<div className="form-floating">
					<textarea className="form-control" id="floatingTextarea2"></textarea>
					<label htmlFor="floatingTextarea2">Comentarios</label>
				</div>
				<div className="d-flex justify-content-center gap-4 mt-4">
					<div className="">
						<button type="submit" className="btn btn-primary">Subir</button>
					</div>
					<div className="">
						<button type="reset" className="btn btn-primary">Limpiar</button>
					</div>
					<div className="">
						<Link to="/" className="btn btn-primary">Cancelar</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateEvent;
