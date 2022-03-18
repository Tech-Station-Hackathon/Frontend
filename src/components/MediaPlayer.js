import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import '../styles/MediaPlayer.css';

const MediaPlayer = () => {

	return (
		<div className="d-flex flex-column text-center  align-items-center h-100">
			<div className=" mt-1">
				<h1>Evento Online</h1>
			</div>
			<div className="justify-items-center h-100">
				<ReactPlayer url="https://youtu.be/31xWfcXtTcQ" />
			</div>

			<div className="">
				<Link to="/encuesta" className="btn btn-primary add m-2">
                        Encuesta
				</Link>
			</div>
		</div>
	);
};

export default MediaPlayer;
