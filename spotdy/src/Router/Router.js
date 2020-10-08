import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';


function Router() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" >
                <HomePage />
            </Route>

            <Route exact path="/login" >
                <LoginPage />
            </Route>

            <Route exact path="/cadastro" >
                <SignupPage />
            </Route>

            <Route path="/" >
                <h3>Eita Giovana, o forninho caiu (404)</h3>
            </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default Router;