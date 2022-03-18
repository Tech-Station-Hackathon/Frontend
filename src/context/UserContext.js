import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const userContext = createContext();

const URL = 'https://techstationhackathon.herokuapp.com/api/users';
const options = {
	method: 'GET',
};

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ login: false });

	UserProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};

	const addUser = (user) => {
		let userToAdd = {
			name: user.name,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
			age: 25,
			avatar: user.avatar,
			role: user.role
		};
		const optionPOST =
		{
			method: 'POST',
			body: userToAdd
		};

		let pushUser = async () => {
			let response = await fetch(URL, optionPOST);
			let user = await response.json();
				
			console.log(user);
		};
		pushUser();

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

	const isAdmin = ()=>{
		return (user.role==='admin'?true:false);
	};

	const isDirector = ()=>{
		return (user.role==='manage'?true:false);
	};

	const login = (userEmail, userPassword) => {
		let getUser = async () => {
			let response = await fetch(URL, options);
			if (response.status === 200) {
				let dataUser = await response.json();
				setUser({
					name: dataUser.user.name,
					lastName: dataUser.user.lastname,
					email: dataUser.user.email,
					password: userPassword,
					login: true,
					role: dataUser.user.role,
					avatar: dataUser.user.avatar,
					age: dataUser.user.age
				});
				sessionStorage.setItem(userEmail, JSON.stringify(dataUser));
			}
			else {
				throw Error('No se encuentra el usuario');
			}
		};
		getUser();

	};
	
	return <userContext.Provider value={{ isUser, isLogin, addUser, user, setUser, login, closeSession,isAdmin , isDirector}}>
		{children}
	</userContext.Provider>;
};