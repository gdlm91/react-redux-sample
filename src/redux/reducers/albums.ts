import { handleActions } from "redux-actions";
import { AppState } from "../../types";

const albumsReducer = handleActions<AppState["albums"], any>(
  {
    ALBUMS_ADD: (state, action) => {
      return [...state, action.payload.album];
    },

    ALBUMS_REMOVE_LAST: (state, action) => {
      return [...state.slice(0, -1)];
    },
  },
  []
);

export default albumsReducer;
