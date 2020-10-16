import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './App.css';
import Main from './components/main/Main';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Route path='/' component={Main} exact />
      </Router>
    </div>
  );
}

export default App;
