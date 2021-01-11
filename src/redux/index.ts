import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { AppState } from "../types";
import albumsReducer from "./reducers/albums";
import photosReducer from "./reducers/photos";

const store = createStore(
  // reducer
  combineReducers<AppState>({
    albums: albumsReducer,
    photos: photosReducer,
  }),

  // middlewares
  // activate redux dev tool
  composeWithDevTools()
);

export default store;
