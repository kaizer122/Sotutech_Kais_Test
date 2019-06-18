import {
    SELECTED_POST
  } from '../actions/types';
  
  const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SELECTED_POST:
        return action.payload;
      default:
        return state;
    }
  };
  