import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import SelectedUserReducer from './SelectedUserReducer';
import SelectedPostReducer from './SelectedPostReducer';


const rootReducer = combineReducers({
  users: UserReducer,
  posts: PostReducer,
  selectedUser: SelectedUserReducer,
  selectedPost: SelectedPostReducer,
});
export default rootReducer
