// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateAgent from './CreateAgent';
import CreateTicket from './CreateTicket'; // Corrected import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/createAgent" element={<CreateAgent />} />
        <Route path="/createTicket" element={<CreateTicket />} />
      </Routes>
    </Router>
  );
};

export default App;
