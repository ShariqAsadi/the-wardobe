import axios from 'axios';
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
