import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'View/Home';
import Login from 'View/Login';
import Register from 'View/Register';

const NavigationScreen: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default NavigationScreen;
