import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import Estadistica2 from '../assets/Estadistica2.jpg';
import { userContext } from '../context/UserContext';
const RolDirector = () => {
	const { isDirector } = useContext(userContext);


	return (
		<div className='d-flex justify-content-center '>
			<div className="form-signin m-5 p-4 ">
				<div className="card-body text-center">
					<h1 >Estadisticas de Negocio</h1>
					{isDirector()? <p>Eres director</p>: <p>No eres director</p>}
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
							<option value="4">Market Share</option>
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
				<br />
				<h4>Gráfico de Analisis Internet</h4>
				<img src={Estadistica2} alt="Estadistica2.jpg" />  
			</div>
		</div>
	);
};


export default RolDirector;

