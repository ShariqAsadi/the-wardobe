import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getUser } from './redux/actions/authActions';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { ToastProvider } from 'react-toast-notifications';
import Shop from './pages/Shop/Shop';

function App() {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);

  return (
    <Provider store={store}>
      <ToastProvider autoDismissTimeout={1500}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={SignInAndSignUp} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </div>
      </ToastProvider>
    </Provider>
  );
}

export default App;
