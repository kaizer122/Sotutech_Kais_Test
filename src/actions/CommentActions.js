import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    COMMENT_SHOW,
} from './types';

export const executeCommentShow = (comments) => {
  Actions.postDetail();
    return {
        type: COMMENT_SHOW,
        payload: comments 
      }
};
export const commentShow = (postId) => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId)
         .then(response =>  dispatch(executeCommentShow(response.data)))
         .catch(error => {
          console.log("error " + error);
         });
      }
  };