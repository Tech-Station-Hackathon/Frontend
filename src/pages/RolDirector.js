import React from 'react';
import { Link } from 'react-router-dom';


const RolDirector = () => {

	return (
		<div className='d-flex justify-content-center '>
			<div className="form-signin m-5 p-4 ">
				<div className="card-body text-center">
					<h1 >Estadisticas de Negocio</h1>
				</div>
				<form>
					<div className="input-group mb-3">
						<select className="form-select" id="eleccion">
							<option selected>Elegir el segmento a analizar</option>
							<option value="1">Grandes Clientes</option>
							<option value="2">Pymes</option>
							<option value="3">Usuarios finales</option>
							<option value="4">Proveedores</option>
						</select>
					</div>
					<div className="input-group mb-3">
						<select className="form-select" id="eleccion">
							<option selected>Variables a analizar</option>
							<option value="1">Internet</option>
							<option value="2">Móvil</option>
							<option value="3">IOT</option>
							<option value="4">Atención al cliente</option>
						</select>
					</div>
					<div className="input-group mb-3">
						<select className="form-select" id="copia">
							<option selected>Enviarse una copia el mail?</option>
							<option value="Si">Si</option>
							<option value="No">No</option>
						</select>
					</div>								
					<div className="d-flex justify-content-center gap-4 mt-4">
						<div className="">
							<button type="submit" className="btn btn-primary">Descargar Informe</button>
						</div>
						<div className="">
							<Link to="/" className="btn btn-primary">Enviar y Descargar</Link>
						</div>
					</div>
				</form>     
			</div>
		</div>
	);
};


export default RolDirector;

