import { createSlice } from "@reduxjs/toolkit";
import { fetchSubRedditPosts } from "../api/fetchData";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  search: "",
  subReddit: "/r/AskReddit",
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getPostDataSuccess(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostDataStart(state) {
      state.isLoading = true;
    },
    getPostDataError(state) {
      state.isLoading = false;
      state.isError = true;
    },
    setSubReddit(state, action) {
      const url = action.payload.replace(/\/$/, "");
      state.subReddit = url;
    },
  },
});

///////////Exports
///Actions
export const {
  getPostDataError,
  getPostDataStart,
  getPostDataSuccess,
  setSubReddit,
} = postSlice.actions;

///Reducers
export default postSlice;

///Slicea
export const postSelector = (state) => state.posts.posts;
export const subRedditSelector = (state) => state.posts.subReddit;

///Thunk to get posts from selected subReddit
export const getPostData = (subReddit) => async (dispatch) => {
  try {
    dispatch(getPostDataStart());
    const subRedditPosts = await fetchSubRedditPosts(subReddit);
    dispatch(getPostDataSuccess(subRedditPosts));
  } catch (error) {
    dispatch(getPostDataError);
  }
};
