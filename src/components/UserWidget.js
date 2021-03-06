import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const UserWidget = () => {
	const { isLogin, closeSession, user, login } = useContext(userContext);

	const handleCloseSession = () => {
		closeSession();
	};

	useEffect(() => {
		if (sessionStorage.key(0) !== null) {
			let userSession = JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).user.email;
			console.log(userSession);
			userSession !== null ?
				login(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).user.email)
				:
				console.log('No hay usario en sessio');
		}
	}, []);

	return (
		<nav className='col-4 navbar navbar-expand-lg navbar-light bg-light justify-content-end' >
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNavDropdown">
				{
					isLogin() ?
						<div className='navbar-nav me-auto mb-2 mb-lg-0 '>
							<img height={50} className='nav-item rounded-circle me-5' src={user.avatar} alt="avatar" />
							<Link onClick={handleCloseSession} className='btn me-md-2 nav-item bg-blue text-light' to='/login' >Cerrar sesion</Link>
						</div>
						:
						<div className='navbar-nav ' >
							<Link className='btn btn-light me-md-2 color-blue ' to='/login'>Ingresar</Link>
							<Link className='btn  me-md-2 bg-blue text-light' to='/create'>Crear cuenta</Link>
						</div>
				}

			</div>
		</nav>
	);
};

export default UserWidget;