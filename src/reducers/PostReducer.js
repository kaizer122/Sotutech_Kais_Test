import {
    POST_SHOW,
    POST_SET_SELECTED
  } from '../actions/types';
  
  const INITIAL_STATE = [];
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case POST_SHOW:
        return action.payload;
      default:
        return state;
    }
  };
  