import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
