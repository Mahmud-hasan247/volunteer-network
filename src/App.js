import React, { createContext, useState } from 'react';
import './App.css';
import LandingPage from '../src/pages/LandingPage.js';
import LoginPage from '../src/pages/LoginPage.js';
import VolunteerRegisterPage from './pages/VolunteerRegisterPage';
import NotFound from './pages/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventsPage from './pages/EventsPage';
import AdminPage from './pages/AdminPage';

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    
    <>
      <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/register/:name">
              <VolunteerRegisterPage />
            </PrivateRoute>
            <PrivateRoute path='/register'>
              <VolunteerRegisterPage />
            </PrivateRoute>
            <PrivateRoute path='/adminPanel'>
              <AdminPage/>
            </PrivateRoute>
            <Route path="/myEvents">
              <EventsPage/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
