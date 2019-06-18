import axios from 'axios';
import {
    POST_SHOW,
} from './types';

export const postShow = (posts) => {
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
 