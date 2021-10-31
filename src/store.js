import { configureStore } from "@reduxjs/toolkit";
import subRedditSlice from "./features/subReddit-slice";

export default configureStore({
  reducer: {
    subReddits: subRedditSlice.reducer,
  },
});
