import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './components/registartion/reg';
import LoginPage from './components/registartion/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reg" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;