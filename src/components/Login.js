import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';


const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});
	const { login, isLogin } = useContext(userContext);
	let navigate = useNavigate();

	const handleForm = (event) => {
		event.preventDefault();
		login(user.email, user.password);
	};

	const handleChangeUser = ({ name, value }) => {
		setUser({ ...user, [name]: value });
	};

	useEffect(() => {
		if (isLogin()) navigate('/');
	});



	return (
		<div className="d-flex justify-content-center">
			<div className="form-signin m-5 p-4 ">
				<form
					onSubmit={handleForm}
					onChange={({ target }) => handleChangeUser(target)}>
					<div className="form-floating mb-3">
						<input type="email" name="email" placeholder="ejemplo@hacker.com" className="form-control" value={user.email} required />
						<label htmlFor="email" >Email</label>
					</div>
					<div className="form-floating mb-3">
						<input type="password" name="password" placeholder="*********" className="form-control" value={user.password} minLength="6" required />
						<label htmlFor="password" >Contraseña</label>
					</div>
					<div className="mb-3 ">
						<input type="submit" value="Ingresar" className="btn hover-overlay text-light bg-blue mb-3 w-100" />
					</div>

				</form>

				<Link to="/" className="btn btn-link">Olvidé mi contraseña</Link>
				<Link to="/create" className="btn btn-link">Registrarme</Link>
			</div>
		</div>

	);
};

export default Login;