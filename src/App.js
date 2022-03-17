import React from 'react';
import { Home } from './pages/Home'
import './App.css';
import { User } from './pages/User';
import { Admin } from './pages/Admin';

const App = () => {
  return (
<<<<<<< HEAD
      <Home />
=======
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
>>>>>>> aec3e2182ee619a59d69b4529f55e8782df5ddc3
  )
}

export default App;
