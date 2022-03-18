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
		return (user.role==='director'?true:false);
	};

	const login = (userEmail, userPassword) => {
		let getUser = async () => {
			let response = await fetch(URL, options);
			let dataUser = await response.json();
			console.log(dataUser);
			
			if (dataUser.user.email === userEmail) {
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