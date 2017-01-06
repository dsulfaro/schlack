export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SIERRORS = 'RECEIVE_SIERRORS';
export const RECEIVE_SUERRORS = 'RECEIVE_SUERRORS';

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = user => ({
  type: SIGNUP,
  user
});

export const receiveCurrentUser = currentUser => ({
  type: 'RECEIVE_CURRENT_USER',
  currentUser
});

export const receiveSiErrors = errors => ({
  type: 'RECEIVE_SIERRORS',
  errors
});

export const receiveSuErrors = errors => ({
  type: 'RECEIVE_SUERRORS',
  errors
});
