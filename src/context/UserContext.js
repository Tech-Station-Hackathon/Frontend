import React, { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ login: false });

    const addUser = (user) => {
        setUser({
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.passwor,
            login: user.login
        })
    }

    const closeSession = () => {
        setUser({ login: false })
    }

    const isLogin = () => {
        return (user.login ? true : false)
    }

    const isUser = (userEmail, userPassword) => {
        return (user.email === userEmail && user.password === userPassword ? true : false)
    }

    const login = (userEmail, userPassword) => {
        const getProducts = async () => {
            
        }
        getProducts()
    }
    return <userContext.Provider value={{ isUser, isLogin, addUser, user, setUser, login, closeSession }}>
        {children}
    </userContext.Provider>
}