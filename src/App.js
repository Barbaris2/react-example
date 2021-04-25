import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/navbar/Navbar';

import './App.css';
import Main from './layout/main/Main';
import ResizeContext from './components/resize-context/ResizeContext';
import ResizeContextMulti from './components/resize-context/ResizeContextMulti';
import DataGrid from './components/data-grid/DataGrid';
import MenuBasic from './components/menu/MenuBasic';
import MenuEvent from './components/menu/MenuEvent';
import MenuItems from './components/menu/MenuItems';
import TypewriterUsage from './components/typewriter/TypewriterUsage';
import TagTruncator from './components/resize-context/TagTruncator';
import AsyncWatcher from './components/hooksPage/asyncWatcher/AsyncWatcher';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Route path='/' component={Main} exact />
        <Route path='/resize' component={ResizeContext} />
        <Route path='/resizemulti' component={ResizeContextMulti} />
        <Route path='/tagtruncator' component={TagTruncator} />
        <Route path='/datagrid' component={DataGrid} />
        <Route path='/menu' component={MenuBasic} />
        <Route path='/menuevent' component={MenuEvent} />
        <Route path='/menuitems' component={MenuItems} />
        <Route path='/typewriter' component={TypewriterUsage} />
        <Route path='/hooks-watch-async' component={AsyncWatcher} />
      </Router>
    </div>
  );
}

export default App;
