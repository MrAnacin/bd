import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg from './components/registartion/reg';
import Login from './components/registartion/login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/reg" element={<Reg />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;