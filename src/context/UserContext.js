import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const userContext = createContext();

export const UserProvider = ({children}) => {
	const [user, setUser] = useState({ login: false });

	UserProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};

	const addUser = (user) => {
		setUser({
			name: user.name,
			email: user.email,
			password: user.passwor,
			login: user.login,
			rol: user.rol
		});
	};

	const closeSession = () => {
		setUser({ login: false });
		sessionStorage.clear();
	};

	const isLogin = () => {
		return (user.login ? true : false);
	};

	const isUser = (userEmail, userPassword) => {
		return (user.email === userEmail && user.password === userPassword ? true : false);
	};

	const login = (userEmail, userPassword) => {
		setUser({email:userEmail,password:userPassword, login:true, rol:'admin'});
		sessionStorage.setItem(userEmail, JSON.stringify('email'));
	};

	return <userContext.Provider value={{ isUser, isLogin, addUser, user, setUser, login, closeSession }}>
		{children}
	</userContext.Provider>;
};