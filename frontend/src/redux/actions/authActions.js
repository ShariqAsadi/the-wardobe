import axios from '../../api/axios';
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

//Setup headers and configs
export const setupConfig = getState => {
  //Getting the token from localstorage
  const token = getState().auth.token;

  //Setting the headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
};

//Check for token and get user

export const getUser = () => async (dispatch, getState) => {
  //Start the loader
  dispatch({ type: USER_LOADING });

  try {
    let response = await axios.get('/api/user/session', setupConfig(getState));
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = (name, email, password) => async dispatch => {
  try {
    const body = { name, email, password };
    dispatch({ type: USER_LOADING });
    let response = await axios.post('/api/user/register', body);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
    );
    dispatch({ type: REGISTER_FAIL });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  try {
    const body = { email, password };
    dispatch({ type: USER_LOADING });
    let response = await axios.post('/api/user/login', body);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
    );
    dispatch({ type: LOGIN_FAIL });
  }
};

//Login with Google
export const oauthGoogle = token => async dispatch => {
  try {
    let body = {
      access_token: token
    };
    dispatch({ type: USER_LOADING });
    let response = await axios.post('/api/user/oauth/google', body);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'GOOGLE_LOGIN_FAIL')
    );
    dispatch({ type: LOGIN_FAIL });
  }
};

//Login with Facebook
export const oauthFacebook = token => async dispatch => {
  try {
    let body = {
      access_token: token
    };
    dispatch({ type: USER_LOADING });
    let response = await axios.post('/api/user/oauth/facebook', body);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch(
      returnErrors(
        err.response.data,
        err.response.status,
        'FACEBOOK_LOGIN_FAIL'
      )
    );
    dispatch({ type: LOGIN_FAIL });
  }
};

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
