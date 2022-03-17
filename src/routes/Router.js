import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateAccount from '../components/CreateAccount'
import Header from "../components/Header";
import Login from '../components/Login'
import Home from "../pages/Home";
import NotFound from '../pages/NotFound'
import { UserProvider } from '../context/UserContext';


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

