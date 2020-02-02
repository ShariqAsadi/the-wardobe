import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getUser } from './redux/actions/authActions';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

function App() {

  useEffect(() => {
    store.dispatch(getUser());
  }, [])

  return (
    <Provider store={store}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={SignInAndSignUp} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
