import { LOGIN, LOGOUT, SIGNUP,
  receiveCurrentUser, receiveSiErrors,
  receiveSuErrors } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';
import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {

  const successCallback = user => {
    dispatch(receiveCurrentUser(user));
    hashHistory.push('/dashboard');
  };

  const suErrorCallback = error => {
    dispatch(receiveSuErrors(error.responseJSON));
  };

  const siErrorCallback = error => {
    dispatch(receiveSiErrors(error.responseJSON));
  };

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, siErrorCallback);
      return next(action);
    case LOGOUT:
      logout(errorCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, suErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
