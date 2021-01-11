import { createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppState } from "../types";

const INITIAL_STATE: AppState = {
  albums: [],
  photos: [],
};

const reducer: Reducer<AppState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ALBUMS_ADD":
      return {
        ...state,
        albums: [...state.albums, action.payload.album],
      };

    case "ALBUMS_REMOVE_LAST":
      return {
        ...state,
        albums: [...state.albums.slice(0, -1)],
      };

    case "PHOTOS_ADD":
      return {
        ...state,
        photos: [...state.photos, action.payload.photo],
      };

    case "PHOTOS_REMOVE_LAST":
      return {
        ...state,
        photos: [...state.photos.slice(0, -1)],
      };

    default:
      return state;
  }
};

const store = createStore(
  // reducer
  reducer,

  // middlewares
  // activate redux dev tool
  composeWithDevTools()
);

export default store;
