// App.js
import React from 'react';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      {!user && <Login />}
    </div>
  );
};

export default App;
