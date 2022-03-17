import React from 'react'
import '../styles/CreateAccount.css'

const CreateAccount = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="m-5 p-4 border border-secondary rounded-3">
        <h1 >Mi cuenta</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre </label>
            <input type="nombre" id="nombre" className="form-control" placeholder="Tech" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email </label>
            <input type="email" id="email" className="form-control" placeholder="ejemplo@hacker.com" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" id="password" className="form-control" placeholder="*********" />
          </div>
          <div className="mb-3">
          </div>
          <button type="submit" className="btn btn-primary">Crear cuenta</button>
        </form>

      </div>
    </div>
  )
}


export default CreateAccount;