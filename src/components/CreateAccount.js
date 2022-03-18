import React from 'react';

const CreateAccount = () => {
	return (
		<div className="d-flex justify-content-center ">
			<div className="form-signin m-5 p-4 ">
				<h1 >Mi cuenta</h1>

				<form>
					<div className="form-floating mb-3">
						<input type="nombre" id="nombre" className="form-control" placeholder="Tech" />
						<label htmlFor="nombre" >Nombre </label>
					</div>
					<div className="form-floating mb-3">
						<input type="email" id="email" className="form-control" placeholder="ejemplo@hacker.com" aria-describedby="emailHelp" />
						<label htmlFor="email" >Email </label>
					</div>
					<div className="form-floating mb-3">
						<input type="password" id="password" className="form-control" placeholder="*********" />
						<label htmlFor="password" >Contraseña</label>
					</div>
					<div className="mb-3">
					</div>
					<button type="submit" className="btn btn-primary w-100">Crear cuenta</button>
				</form>

			</div>
		</div>
	);
};


export default CreateAccount;