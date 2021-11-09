import { configureStore } from "@reduxjs/toolkit";
import subRedditSlice from "./features/subReddit-slice";
import postSlice from "./features/posts-slice";
import commentsSlice from "./features/comments-slice";

export default configureStore({
  reducer: {
    subReddits: subRedditSlice.reducer,
    posts: postSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
