import {
    POST_SHOW,
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
  