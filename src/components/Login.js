import React from 'react'
import '../styles/Login.css'

export const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122020/flow.png?0_ZwcZrYb5krHrLahUR4efi12mYCc27m&itok=EpMk_AqO" alt="logo" className="logo" />

        <form>
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
          <button type="submit" className="btn btn-primary">Iniciar sesion</button>
        </form>

      </div>
    </div>
  )
}

