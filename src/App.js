import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/navbar/Navbar';

import './App.css';
import Main from './layout/main/Main';
import ResizeContext from './components/resize-context/ResizeContext';
import ResizeContextMulti from './components/resize-context/ResizeContextMulti';
import DataGrid from './components/data-grid/DataGrid';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Route path='/' component={Main} exact />
        <Route path='/resize' component={ResizeContext} exact />
        <Route path='/resizemulti' component={ResizeContextMulti} exact />
        <Route path='/datagrid' component={DataGrid} exact />
      </Router>
    </div>
  );
}

export default App;
