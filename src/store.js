import { configureStore } from "@reduxjs/toolkit";
import subRedditSlice from "./features/subReddit-slice";
import postSlice from "./features/posts-slice";

export default configureStore({
  reducer: {
    subReddits: subRedditSlice.reducer,
    posts: postSlice.reducer,
  },
});
