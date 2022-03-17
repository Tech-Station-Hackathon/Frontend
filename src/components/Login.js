import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../context/UserContext'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { login, isLogin } = useContext(userContext);
  let navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault()
    login(user.email, user.password)
  }

  const handleChangeUser = ({ name, value }) => {
    setUser({ ...user, [name]: value })
  }
  useEffect(() => {
    if (isLogin()) navigate('/')
  })

  return (
    <div className="login">
      <div className="form-container">
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122020/flow.png?0_ZwcZrYb5krHrLahUR4efi12mYCc27m&itok=EpMk_AqO" alt="logo" className="logo" />

        <form
          onSubmit={handleForm}
          className="form"
          onChange={({ target }) => handleChangeUser(target)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" id="email" placeholder="ejemplo@hacker.com" className="form-control" value={user.email} />

            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" id="password" placeholder="*********" className="form-control" value={user.password} />
          </div>
          <div className="mb-3 ">
            <input type="submit" value="Ingresar" className="btn btn-primary mb-3" />
          </div>

        </form>

        <Link to="/" className="btn">Olvidé mi contraseña</Link>
        <Link to="/create" className="btn">Registrarme</Link>
      </div>
    </div>

  );
}

export default Login;