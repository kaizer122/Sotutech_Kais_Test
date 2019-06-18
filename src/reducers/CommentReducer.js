import {
    COMMENT_SHOW,
  } from '../actions/types';
  
  const INITIAL_STATE = [];
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case COMMENT_SHOW:
        return action.payload;
      default:
        return state;
    }
  };
  