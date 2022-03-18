import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const Logo = () => {
	const { isLogin } = useContext(userContext);

	return (
		<div className="col-4 d-flex justify-content-center">
			{

				isLogin() ?
					<Link to="/homeRegistered" ><img   src="https://cdn.discordapp.com/attachments/952957593020661780/954109047135690832/logoequipo4.jpg" alt="LOGO" /></Link>
					:
					<img src="https://cdn.discordapp.com/attachments/952957593020661780/954109047135690832/logoequipo4.jpg" alt="LOGO" />
			}
		</div>
	);
};

export default Logo;  