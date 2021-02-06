import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import nookies from 'nookies';
import firebase from '../firebase/firebaseClient';
import { createUser } from '../firebase/db';
import { APP_TOKEN } from './constants';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(async rawUser => {
      if (!rawUser) {
        setUser(null);
        nookies.set(null, APP_TOKEN, '', {});
      } else {
        const formattedUser = await formatUser(rawUser);
        const { token, ...otherUserDetails } = formattedUser;
        createUser(formattedUser.uid, otherUserDetails);
        setUser(formattedUser);
        nookies.set(null, APP_TOKEN, token, {});
      }
    });

    return () => unsubscribe();
  }, []);

  const signinWithEmail = (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setLoading(false);
        Router.push('/');
      });
  };

  const signupWithEmail = (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setLoading(false);
        Router.push('/');
      });
  };

  const signinWithGoogle = redirect => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => {
        setLoading(false);
        Router.push('/');
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        Router.push('/');
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signinWithEmail,
        signinWithGoogle,
        signupWithEmail,
        signout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const formatUser = async rawUser => {
  const token = await rawUser.getIdToken();
  return {
    uid: rawUser.uid,
    email: rawUser.email,
    name: rawUser.displayName,
    provider: rawUser.providerData[0].providerId,
    photoUrl: rawUser.photoURL,
    token,
  };
};

export { useAuth, AuthProvider };
