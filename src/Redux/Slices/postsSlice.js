import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../Services/postsService'; 


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const posts = await getPosts(); 
    return posts;
  } catch (error) {
    throw error;
  }
});


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
