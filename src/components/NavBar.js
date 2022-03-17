import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faUser } from '@fortawesome/free-solid-svg-icons'

const isLogin = false

export const NavBar = () => {
  const [visible, setVisible] = useState(false)

  const handleCloseSession = () => {

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

          </ul>
          <FontAwesomeIcon icon={faFire} className='menu' />
          <div>
            {
              isLogin ?
                <div onClick={() => setVisible(!visible)} >
                  <p>Bienvenido, !</p>
                  <div
                    className={`contentList ${visible ? 'show' : null}`}
                    onMouseLeave={() => setVisible(!visible)}
                  >
                    <Link to={'/'} onClick={handleCloseSession}>Cerrar sesion</Link>
                  </div>
                </div>
                :
                <div>
                    <Link className='dropdown-item' to='/login'>Ingresar</Link>
                    <Link className='dropdown-item' to='/create'>Crear cuenta</Link>
                </div>

            }
          </div>
        </div>
      </div>

    </nav>
  )
}
