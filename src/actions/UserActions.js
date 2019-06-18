import axios from 'axios';
import {
  USERS_FETCH_SUCCESS,
  SELECTED_USER,
} from './types';

export const usersFetch = (users) => {
    return {
        type: USERS_FETCH_SUCCESS,
        payload: users 
      }
};
export const usersFetchAll = () => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/users/')
           .then(response =>  dispatch(usersFetch(response.data)))
           .catch(error => {
            console.log("error " + error);
           });
           
        }
    };
    export const selectUser = (userId) => {
      return {
        type: SELECTED_USER,
        payload: userId
      };
    };
    
 