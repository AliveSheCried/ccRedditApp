import { createSlice } from "@reduxjs/toolkit";
//import { fetchSubRedditPosts } from "../api/fetchData";

const initialState = {
  comments: [],
  isLoading: false,
  isError: false,
  permaLink: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    getCommentsSuccess(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getCommentsStart(state) {
      state.isLoading = true;
    },
    getCommentsError(state) {
      state.isLoading = false;
      state.isError = true;
    },
    setPermaLink(state, action) {
      const url = action.payload.replace(/\/$/, "");
      state.permaLink = url;
    },
    //   clearSearch(state) {
    //     state.search = "";
    //   },
  },
});

///////Exports
///Actions
export const {
  getCommentsSuccess,
  getCommentsStart,
  getCommentsError,
  setPermaLink,
} = commentsSlice.actions;

///Reducer
export default commentsSlice;

//Slices
export const commentsSelector = (state) => state.comments.comments;
export const permaLinkSelector = (state) => state.comments.permaLink;
