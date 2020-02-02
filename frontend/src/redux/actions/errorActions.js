import { GET_ERRORS, CLEAR_ERRORS } from './types';

//Return the errors

export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id }
  };
};

//Clear the errors

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
