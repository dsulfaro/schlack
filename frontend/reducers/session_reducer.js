import React from 'react';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const __defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = __defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser, errors: [] });
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case LOGOUT:
      return merge({}, __defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
