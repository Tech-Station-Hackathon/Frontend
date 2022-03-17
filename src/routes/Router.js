import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateAccount from '../components/CreateAccount'
import Header from "../components/Header";
import Login from '../components/Login'
import Home from "../pages/Home";
import NotFound from '../pages/NotFound'
import { UserProvider } from '../context/UserContext';
import HomeRegistered from "../components/HomeRegistered";
import Footer from "../components/Footer"
import VideoEvento from "../components/VideoEvento"

const Routers = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/homeRegistered' element={<HomeRegistered />} />
                    <Route path='/create' element={<CreateAccount />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/videoEvento" element={<VideoEvento/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </UserProvider>
    );
}

export default Routers;

