import axios from 'axios';
import { Actions } from 'react-native-router-flux';
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
 export const selectPost = (post) => {
       
        return {
          type: SELECTED_POST,
          payload: post
      }
   };

export const deletePost = (postId) => {
    return () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+postId)
          .then(() => {
            Actions.usersList({ type: 'reset' });
          });
      };

}; 

