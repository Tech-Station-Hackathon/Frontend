import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import CreateAccount from '../components/CreateAccount';
import Header from '../components/Header';
import Login from '../components/Login';
import Home from '../pages/Home';
import HomeRegistered from '../pages/HomeRegistered';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer';
import MediaPlayer from '../components/MediaPlayer';
import NextEvents from '../pages/NextEvents';
import HistoricEvents from '../pages/HistoricEvents';

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
					<Route path="/media" element={<MediaPlayer/>} />
					<Route path="/nextevents" element={<NextEvents />} />
					<Route path="/historicevents" element={<HistoricEvents/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer/>
		</UserProvider>
	);
};

export default Routers;

