import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const NavBar = () => {
  const { isLogin } = useContext(userContext);


  return (
    <div className="col-4">
      {
        isLogin() ?
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-dark" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Eventos
										</Link>
										<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
											<li><Link className="dropdown-item" to="/nextevents">Próximos</Link></li>
											<li><hr className="dropdown-divider" /></li>
											<li><Link className="dropdown-item" to="/historicevents">Históricos</Link></li>
                      
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					: <></>
			}
		</div>
	);
};

export default NavBar;