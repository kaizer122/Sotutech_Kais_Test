import axios from 'axios';
import {
    POST_SHOW,
    SELECTED_POST,
} from './types';

export const postShow = (posts) => {
    posts.sort((a,b) => (a.id > b.id) ? -1 : ((b.last_nom > a.last_nom) ? 1 : 0));
    return {
        type: POST_SHOW,
        payload: posts 
      }
};
export const getPostsForUser = (userId) => {
    return (dispatch) => {
        
      axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
           .then(response =>  dispatch(postShow(response.data)))
           .catch(error => {
            console.log("error " + error);
           });
           
        }
    };
 export const selectPost = (postId) => {
        return {
          type: SELECTED_POST,
          payload: postId
        };
      };