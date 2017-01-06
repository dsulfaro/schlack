import React from 'react';
import { RECEIVE_CURRENT_USER,
         RECEIVE_SIERRORS,
         RECEIVE_SUERRORS,
         LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const __defaultState = {
  currentUser: null,
  sierrors: [],
  suerrors: []
};

const SessionReducer = (state = __defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser, errors: [] });
    case RECEIVE_SIERRORS:
      return merge({}, state, {sierrors: action.errors});
    case RECEIVE_SUERRORS:
      return merge({}, state, {suerrors: action.errors});
    case LOGOUT:
      return merge({}, __defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
