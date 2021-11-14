import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/fetchData";

const initialState = {
  subReddits: [],
  isLoading: false,
  isError: false,
};

const subRedditSlice = createSlice({
  name: "subReddits",
  initialState: initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.subReddits = action.payload;
      state.isLoading = false;
    },
    getDataStart(state) {
      state.isLoading = true;
    },
    getDataError(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

/////////exports
///actions
export const { getDataSuccess, getDataStart, getDataError } =
  subRedditSlice.actions;

///slice/reducer
export default subRedditSlice;

/////////Thunk to get subReddit data
export const getSubRedditData = () => async (dispatch) => {
  try {
    dispatch(getDataStart());
    const subReddits = await fetchData("subreddits");
    dispatch(getDataSuccess(subReddits));
  } catch (error) {
    dispatch(getDataError);
  }
};

///selector(s)
export const subRedditSelector = (state) => state.subReddits.subReddits;
export const subRedditLoadingSelector = (state) => state.subReddits.isLoading;
