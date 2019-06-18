import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import SelectedUserReducer from './SelectedUserReducer';

const rootReducer = combineReducers({
  users: UserReducer,
  posts: PostReducer,
  selectedUser: SelectedUserReducer
});
export default rootReducer
