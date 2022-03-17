import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="form-container">
          

            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" placeholder="ejemplo@hacker.com" className="input input-email" />

            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />

            <input type="submit" value="Iniciar sesión" className="primary-button login-button" />
            <a href="/">Olvidé mi contraseña</a>

          <button className="secondary-button signup-button">Registrarme</button>
        </div>
      </div>
    </>
  );
}

export default Login;