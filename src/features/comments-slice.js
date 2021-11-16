import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/fetchData";

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
      state.comments = action.payload;
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
export const isLoadingSelector = (state) => state.comments.isLoading;
export const isErrorSelector = (state) => state.comments.isError;

///Thunk to get comment data.
export const getComments = (permaLink) => async (dispatch) => {
  try {
    dispatch(getCommentsStart());
    const postComments = await fetchData(permaLink);
    dispatch(getCommentsSuccess(postComments));
  } catch (error) {
    dispatch(getCommentsError);
  }
};
