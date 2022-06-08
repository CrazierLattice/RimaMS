import { createSlice } from '@reduxjs/toolkit';

export const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
      return state;
    },
    newPost: (state, action) => {
      state = action.payload;
      return state;
    },
    deletePost: (state, action) => {
      return state.filter((posts) => posts.post_id !== action.payload.post_id);
    },
  },
});

export const { setPosts, newPost, deletePost } = forumSlice.actions;

export default forumSlice.reducer;
