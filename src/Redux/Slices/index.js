import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../Slices/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;