import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar'
import { Login } from './components/Login';
import { CreateAccount } from './components/CreateAccount';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';

import './App.css';
import { User } from './pages/User';
import { Admin } from './pages/Admin';

const App = () => {
  return (
    <BrowserRouter  basename={'/Frontend'}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<User />} />
          <Route path='/admin' element={<Admin />} />
          
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
