<<<<<<< HEAD
import { Login } from './components/Login';
import { CreateAccount } from './components/CreateAccount';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateAccount from '../components/CreateAccount'
import Header from "../components/Header";
import Login from '../components/Login'
import Home from "../pages/Home";
import NotFound from '../pages/NotFound'
import { UserProvider } from '../context/UserContext';

>>>>>>> 98852808d5480b3ae0ce63c97e4459f3101c2f7f

const Routers = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<CreateAccount />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default Routers;

