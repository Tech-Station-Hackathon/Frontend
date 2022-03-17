import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFire, faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/NavBar.css'

const isLogin = false

const NavBar = () => {
  const [visible, setVisible] = useState(false)

  const handleCloseSession = () => {

  }

  return (
    <nav>
      <FontAwesomeIcon icon={faBars} className='menu' />
      <div className="navbar-left">
        <FontAwesomeIcon icon={faFire} className='menu' />
        <ul>
          <li>
            <a href="/">Elemento 1</a>
          </li>
          <li>
            <a href="/">Eelemento 2 </a>
          </li>
          <li>
            <a href="/">Elemento 3</a>
          </li>
        </ul>
      </div>
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
            <div onClick={() => setVisible(!visible)} >
              <FontAwesomeIcon icon={faUser} alt="usuario" />
              <div
                className={`contentList ${visible ? 'show' : null}`}
                onMouseLeave={() => setVisible(!visible)}
              >
                <Link to='/login'>Ingresar</Link>
                <Link to='/create'>Crear cuenta</Link>
              </div>
            </div>

        }
      </div>
    </nav>
  )
}

export default NavBar;