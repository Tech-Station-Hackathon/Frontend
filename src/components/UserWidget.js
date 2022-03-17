import React from 'react'
import { Link } from 'react-router-dom';

const isLogin=true;

const UserWidget = () => {
  return (
    <div className='col-4' >
            {
              isLogin ?
                <div className='d-grid gap-2 d-md-flex justify-content-md-end p-2'>
                    <p  className='me-md-2 ' >Bienvenido,Tech !</p>
                    <Link className='btn btn-dark me-md-2' to='/login'>Cerrar sesion</Link>

                </div>
                :
                <div  className='d-grid gap-2 d-md-flex justify-content-md-end p-2' >
                    <Link className='btn btn-light me-md-2' to='/login'>Ingresar</Link>
                    <Link className='btn btn-dark me-md-2' to='/create'>Crear cuenta</Link>
                </div>
            }
           
          </div>
  )
}

export default UserWidget