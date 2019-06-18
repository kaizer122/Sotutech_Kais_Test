import {
    SELECTED_USER
  } from '../actions/types';
export default (state = null, action) => {
    switch (action.type) {
      case SELECTED_USER:
        return action.payload;
      default:
        return state;
    }
  };
  