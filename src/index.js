import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Sidebar from './layouts/Sidebar/Sidebar';
import Calendar from './pages/Calendar/Calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={ Login } />
          <div class="App">
            <Sidebar>
              <Route exact path='/' component={ Main } />
              <Route path='/calendar' component={ Calendar } />
            </Sidebar>
          </div>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

