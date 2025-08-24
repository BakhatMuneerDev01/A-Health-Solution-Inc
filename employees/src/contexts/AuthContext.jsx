import React, { createContext, useContext, useEffect, useState } from 'react';
import { dummyUsers } from "../utils/dummyUsers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticatedd] = useState(false)

    const login = (email, password) => {
        let foundUser = dummyUsers.find(user => user.email === email && user.password === password)
        if (foundUser) {
            setUser(foundUser)
            setIsAuthenticatedd(true)
            localStorage.setItem('user', JSON.stringify(foundUser)); // Store user in local storage
            return true;

        } else {
            return false;
        }
    }
    const logout = () => {
        setUser(null)
        setIsAuthenticatedd(false)
        localStorage.removeItem('user');
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticatedd(true);
        };

    }, [])

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};

export const useAuth = () => {
    return useContext(AuthContext);
}
