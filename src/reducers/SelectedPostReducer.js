import {
    SELECTED_POST
  } from '../actions/types';
export default (state = null, action) => {
    switch (action.type) {
      case SELECTED_POST:
        return action.payload;
      default:
        return state;
    }
  };
  