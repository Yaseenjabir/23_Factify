import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("activePage") || "Home";
const color = createSlice({
  name: "color",
  initialState: initialState,
  reducers: {
    changeColor: (state, action) => {
      return action.payload;
    },
  },
});

const appLoading = createSlice({
  name: "appLoading",
  initialState: true,
  reducers: {
    changeState: () => {
      return false;
    },
  },
});

const error = createSlice({
  name: "error",
  initialState: null,
  reducers: {
    defaultValue: () => {
      return null;
    },
    errorMsg: (state, action) => {
      return action.payload;
    },
  },
});

const output = createSlice({
  name: "output",
  initialState: "",
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    noResponse: () => {
      return "Something went wrong";
    },
    empty: () => {
      return "";
    },
    noInput: () => {
      return "Please Enter a number";
    },
    DataLoading: () => {
      return "Loading...";
    },
  },
});

const images = createSlice({
  name: "images",
  initialState: null,
  reducers: {
    setImages: (state, action) => {
      return action.payload;
    },
  },
});

const randomFacts = createSlice({
  name: "randomFact",
  initialState: "http://numbersapi.com/random/trivia",
  reducers: {
    setFactsState: (state, action) => {
      console.log(action.payload);
      return `http://numbersapi.com/random/${action.payload}`;
    },
  },
});

const store = configureStore({
  reducer: {
    colorSlice: color.reducer,
    appLoadingSlice: appLoading.reducer,
    errorSlice: error.reducer,
    outputSlice: output.reducer,
    imagesSlice: images.reducer,
    randomFactsSlice: randomFacts.reducer,
  },
});

export default store;
export const colorSLice = color.actions;
export const appLoadingSlice = appLoading.actions;
export const { defaultValue, errorMsg } = error.actions;
export const { setData, noResponse, empty, noInput, DataLoading } =
  output.actions;
export const { setImages } = images.actions;
export const { setFactsState } = randomFacts.actions;
