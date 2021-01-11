import { handleActions } from "redux-actions";
import { AppState } from "../../types";

const photosReducer = handleActions<AppState["photos"], any>(
  {
    PHOTOS_ADD: (state, action) => {
      return [...state, action.payload.photo];
    },

    PHOTOS_REMOVE_LAST: (state, action) => {
      return [...state.slice(0, -1)];
    },
  },
  []
);

export default photosReducer;
