import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';


const CreateAccount = () => {
	const { addUser } = useContext(userContext);

	const [user, setUser] = useState({
		name: '',
		lastname:'',
		email: '',
		password: '',
		age:''
	});
	const [isSubmitDisable, setIsSubmitDisable] = useState(true);
	let navigate = useNavigate();

	const handleChangeUser = ({ name, value }) => {
		setUser({ ...user, [name]: value });
	};

	const handleForm = (event) => {
		event.preventDefault();
		addUser(user);
		/*
		const createUser = async () => {
			await 
		};
		createUser();
		*/

		navigate('/login');
	};

	useEffect(() => {
		const userKeys = Object.keys(user);
		const isSomeUserPropEmpty = userKeys.some((key) => user[key] === '');
		setIsSubmitDisable(isSomeUserPropEmpty);
	}, [user]);

	return (
		<div className="d-flex justify-content-center ">
			<div className="form-signin m-5 p-4 ">
				<h1 >Crear mi cuenta</h1>
				<form
					onSubmit={handleForm}
					onChange={({ target }) => handleChangeUser(target)}>
					<div className="form-floating mb-3">
						<input type="text" name="name" className="form-control" placeholder="Tech" minLength="2" maxLength="12" value={user.name}/>
						<label htmlFor="nombre" >Nombre </label>
					</div>
					<div className="form-floating mb-3">
						<input type="text" name="lastname" className="form-control" placeholder="Station" minLength="2" maxLength="12" value={user.lastname}/>
						<label htmlFor="lastname" >Apellido </label>
					</div>
					<div className="form-floating mb-3">
						<input type="email" name="email" className="form-control" placeholder="ejemplo@hacker.com" aria-describedby="emailHelp" value={user.email}/>
						<label htmlFor="email" >Email </label>
					</div>
					<div className="form-floating mb-3">
						<input type="password" name="password" className="form-control" placeholder="*********" minLength="6" maxLength="15" value={user.password} pattern="[A-Za-z0-9]+"/>
						<label htmlFor="password" >Contraseña</label>
					</div>
					<div className="mb-3">
					</div>
					<div className="row g-2">
						<div className="col-md">
							<div className="">
								<label htmlFor="date">Fecha nacimiento</label>
								<input type="date" name="age" id="date" min="1910-12-31" max="2004-12-31" required value={user.age}/>
							</div>
						</div>
						<div className="col-md">
							<div className="form-floating">
								<select className="form-select" id="floatingSelectGrid" name="role" aria-label="Floating label select example" value={user.role}>
									<option selected>Seleccionar...</option>
									<option value="1">Subscriptor</option>
									<option value="2">Administrador</option>
									<option value="3">Director</option>
								</select>
								<label htmlFor="floatingSelectGrid">Usuario</label>
							</div>
						</div>
					</div>
					<button type="submit" className="btn btn-primary mt-5 w-100" disabled={isSubmitDisable}>Crear cuenta</button>
				</form>

			</div>
		</div>
	);
};


export default CreateAccount;