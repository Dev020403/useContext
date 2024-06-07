import React, { createContext, useContext, useEffect, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const login = ({ user, email, password }) => {
        setUser(user);
        setEmail(email);
        setPassword(password);
        localStorage.setItem('auth', JSON.stringify({ user, email, password }));
    };

    const logout = () => {
        setUser(null);
        setEmail(null);
        setPassword(null);
        localStorage.removeItem('auth');
    };

    useEffect(() => {
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        if (storedAuth) {
            setUser(storedAuth.user);
            setEmail(storedAuth.email);
            setPassword(storedAuth.password);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, email, password, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create useAuth hook
export const useAuth = () => {
    return useContext(AuthContext);
};
