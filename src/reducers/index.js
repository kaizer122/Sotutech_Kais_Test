import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import SelectedUserReducer from './SelectedUserReducer';
import SelectedPostReducer from './SelectedPostReducer';
import CommentReducer from './CommentReducer';


const rootReducer = combineReducers({
  users: UserReducer,
  posts: PostReducer,
  comments: CommentReducer,
  selectedUser: SelectedUserReducer,
  selectedPost: SelectedPostReducer,
});
export default rootReducer
