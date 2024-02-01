// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowsList from './components/ShowsList';
import ShowDetails from './components/ShowDetails';
import TicketBooking from './components/TicketBooking';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowsList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/ticket" element={<TicketBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
