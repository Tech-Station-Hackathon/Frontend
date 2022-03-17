import React, { createContext, useState } from "react";


export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ login: false });

    const addUser = (user) => {
        setUser({
            name: user.name,
            email: user.email,
            password: user.passwor,
            login: user.login,
            permissions:user.permissions
        })
    }

    const closeSession = () => {
        setUser({ login: false })
        sessionStorage.clear()
    }

    const isLogin = () => {
        return (user.login ? true : false)
    }

    const isUser = (userEmail, userPassword) => {
        return (user.email === userEmail && user.password === userPassword ? true : false)
    }

    const login = (userEmail, userPassword) => {
        setUser({email:userEmail,password:userPassword, login:true})
        sessionStorage.setItem(userEmail, JSON.stringify("email"))

      /*
      const getProducts = async () => {
            const { docs } = await
                getDocs(query(collection(db, "users"),
                    where("email", "==", userEmail),
                    where("password", "==", userPassword)))
            docs.forEach((doc) => {
                setUser({ ...doc.data(), login: true })
            })
        }
        getProducts()*/
    }
    return <userContext.Provider value={{ isUser, isLogin, addUser, user, setUser, login, closeSession }}>
        {children}
    </userContext.Provider>
}