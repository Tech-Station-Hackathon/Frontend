import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import CreateAccount from '../components/CreateAccount';
import Header from '../components/Header';
import Login from '../components/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer';
import MediaPlayer from '../components/MediaPlayer';
import NextEvents from '../pages/NextEvents';
import HistoricEvents from '../pages/HistoricEvents';
import CreateEvent from '../pages/CreateEvent';
import EventSurvey from '../pages/EventSurvey';
import RolDirector from '../pages/RolDirector';

const Routers = () => {

	return (
		<UserProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Frontend' element={<Home />} />
					<Route path='/create' element={<CreateAccount />} />
					<Route path='/login' element={<Login />} />
					<Route path="/media" element={<MediaPlayer />} />
					<Route path="/nextevents" element={<NextEvents />} />
					<Route path="/historicevents" element={<HistoricEvents />} />
					<Route path="/createEvent" element={<CreateEvent />} />
					<Route path="/survey" element={<EventSurvey/>} />
					<Route path="/RolDirector" element={<RolDirector/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</UserProvider>
	);
};

export default Routers;