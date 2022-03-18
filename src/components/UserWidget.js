import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const UserWidget = () => {
	const { isLogin, closeSession,user} = useContext(userContext);

	const handleCloseSession = () => {
		closeSession();
	};
  
	return (
		<nav className='col-4 navbar navbar-expand-lg navbar-light bg-light justify-content-end' >
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

				{
					isLogin() ?
						<div className='navbar-nav '>
							<p className=' d-none d-lg-flex me-md-2 mb-2 mb-lg-0 nav-item' >{ user.email}</p>
							<Link onClick={handleCloseSession} className='btn btn-dark me-md-2 nav-item' to='/login' >Cerrar sesion</Link>
						</div>
						:
						<div className='navbar-nav' >
							<Link className='btn btn-light me-md-2' to='/login'>Ingresar</Link>
							<Link className='btn btn-dark me-md-2' to='/create'>Crear cuenta</Link>
						</div>
				}

			</div>
		</nav>
	);
};

export default UserWidget;