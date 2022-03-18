import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const userContext = createContext();

const URL = 'https://techstationhackathon.herokuapp.com/api/users';
const options = {
	method: 'GET',
	headers: {
		'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjIzMzhiYzE2ZDAxNzZmMThlYjZhMGQ2In0sImlhdCI6MTY0NzU0OTg5MiwiZXhwIjoxNjQ3NjM2MjkyfQ.lP6bguKIy7_w4SWneflIRH6FF9MrvEcRKVb8Waz5P2U'
	},
};

export const UserProvider = ({ children }) => {
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
		let getUser = async () => {
			let dataUser = await fetch(URL, options).
				then(data => {
					if (!data.ok) {
						throw Error(data.status);
					}
					return data.json();

				});
			console.log(dataUser);
			setUser({ email: dataUser.user.email, password: userPassword, login: true, role: dataUser.user.role, avatar: dataUser.user.avatar });
			sessionStorage.setItem(userEmail, JSON.stringify('email'));

		};
		getUser();

	};

	return <userContext.Provider value={{ isUser, isLogin, addUser, user, setUser, login, closeSession }}>
		{children}
	</userContext.Provider>;
};