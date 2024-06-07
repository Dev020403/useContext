import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, email, logout } = useAuth();

    return (
        <nav>
            <h1>My App</h1>
            {user ? (
                <div>
                    <span>Welcome, {user} ({email})</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <span>Please log in</span>
            )}
        </nav>
    );
};

export default Navbar;
