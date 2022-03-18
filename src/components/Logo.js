import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {

	return (
		<div className="col-4 d-flex justify-content-center align-items-center p-2">
			<Link to="/" className="d-flex flex-row gap-2 text-decoration-none">
				<FontAwesomeIcon icon={faRocket} className="color-light size-icon" />
				<div className="d-none d-md-flex flex-column align-items-center fw-bold">
					<span className="color-light " >4Events</span>
					<span className="fs-6 text-primary-50 ">TECO</span>
				</div>
			</Link>
		</div>
	);
};

export default Logo;  