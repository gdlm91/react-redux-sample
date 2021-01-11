import { handleActions } from "redux-actions";
import { AppState } from "../../types";

import { addAlbum, removeLastAlbum, albumsLoaded } from "../actions/albums";

const albumsReducer = handleActions<AppState["albums"], any>(
  {
    [addAlbum.toString()]: (state, action) => {
      return [...state, action.payload.album];
    },

    [removeLastAlbum.toString()]: (state, action) => {
      return [...state.slice(0, -1)];
    },

    [albumsLoaded.toString()]: (state, action) => {
      return [...action.payload.albums];
    },
  },
  []
);

export default albumsReducer;
