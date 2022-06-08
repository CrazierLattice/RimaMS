import { configureStore } from '@reduxjs/toolkit';
import forumReducer from './reducers/forumReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    forum: forumReducer,
  },
});
