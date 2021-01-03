import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import nookies from 'nookies';
import firebase from '../firebase/firebaseClient';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(async rawUser => {
      if (!rawUser) {
        setUser(null);
        nookies.set(null, 'token', '', {});
      } else {
        const token = await rawUser.getIdToken();
        setUser(rawUser);
        nookies.set(null, 'token', token, {});
      }
    });

    return () => unsubscribe();
  }, []);

  const signinWithEmail = (email, password) => {
    // setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response.user);
        // handleUser(response.user);
        Router.push('/');
      });
  };

  const signupWithEmail = (email, password) => {
    // setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response.user);
        // handleUser(response.user);
        Router.push('/');
      });
  };

  const signinWithGoogle = redirect => {
    // setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => {
        // handleUser(response.user);
        // if (redirect) {
        //   Router.push(redirect);
        // }
        Router.push('/');
      });
  };

  const signout = () => {
    Router.push('/');

    return firebase.auth().signOut();
    // .then(() => handleUser(false));
  };

  return (
    <AuthContext.Provider
      value={{ user, signinWithEmail, signinWithGoogle, signupWithEmail, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
