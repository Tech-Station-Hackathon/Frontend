import React from 'react';
import NotFoundImg from '../assets/404.png';

const NotFound = () => {
	return (
		<div className='d-flex justify-content-center'>
			<img className='w-50 h-50' src={NotFoundImg} alt="Not found" />
		</div>
	);
};

export default NotFound;