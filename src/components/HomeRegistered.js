import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import './App.css';

const HomeRegistered = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <NavBar />
    </BrowserRouter>
  )
}

export default HomeRegistered;