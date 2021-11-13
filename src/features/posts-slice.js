import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/fetchData";

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
    setSearch(state, action) {
      state.search = action.payload;
    },
    clearSearch(state) {
      state.search = "";
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
  setSearch,
  clearSearch,
} = postSlice.actions;

///Reducers
export default postSlice;

///Slices
export const postSelector = (state) => state.posts.posts;
export const subRedditSelector = (state) => state.posts.subReddit;
export const searchSelector = (state) => state.posts.search;

///Thunk to get posts from selected subReddit
export const getPostData = (subReddit) => async (dispatch) => {
  try {
    dispatch(getPostDataStart());
    const subRedditPosts = await fetchData(subReddit);
    dispatch(getPostDataSuccess(subRedditPosts));
  } catch (error) {
    dispatch(getPostDataError);
  }
};
