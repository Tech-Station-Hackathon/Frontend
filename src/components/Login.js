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
		console.log(`Login=> EMAIL:${user.email} PASSWORD:${user.password}`);
	};

	const handleChangeUser = ({ name, value }) => {
		setUser({ ...user, [name]: value });
	};

	useEffect(() => {
		if (isLogin()) navigate('/HomeRegistered');
	});

	return (
		<div className="d-flex justify-content-center  ">
			<div className="m-5 p-4 border border-secondary rounded-3">
				<form
					onSubmit={handleForm}
					className="form "
					onChange={({ target }) => handleChangeUser(target)}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="email" name="email" placeholder="ejemplo@hacker.com" className="form-control" value={user.email} required/>

						<label htmlFor="password" className="form-label">Contraseña</label>
						<input type="password" name="password" placeholder="*********" className="form-control" value={user.password} minLength="6" required/>
					</div>
					<div className="mb-3 ">
						<input type="submit" value="Ingresar" className="btn hover-overlay text-light bg-blue mb-3" />
					</div>

				</form>

				<Link to="/" className="btn btn-link">Olvidé mi contraseña</Link>
				<Link to="/create" className="btn btn-link">Registrarme</Link>
			</div>
		</div>

	);
};

export default Login;