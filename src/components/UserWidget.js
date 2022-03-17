import React from 'react'
import { Link } from 'react-router-dom';

const isLogin=true;

const UserWidget = () => {
  return (
    <div className='col-3' >
            {
              isLogin ?
                <div >
                    <p >Bienvenido,Tech !</p>
                    <Link className='btn btn-dark' to='/login'>Cerrar sesion</Link>

                </div>
                :
                <div >
                    <Link className='btn btn-light' to='/login'>Ingresar</Link>
                    <Link className='btn btn-dark' to='/create'>Crear cuenta</Link>
                </div>
            }
          </div>
  )
}

export default UserWidget