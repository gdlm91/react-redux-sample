import { handleActions } from "redux-actions";
import { AppState } from "../../types";
import { addPhoto, removeLastPhoto } from "../actions/photos";

const photosReducer = handleActions<AppState["photos"], any>(
  {
    [addPhoto.toString()]: (state, action) => {
      return [...state, action.payload.photo];
    },

    [removeLastPhoto.toString()]: (state, action) => {
      return [...state.slice(0, -1)];
    },
  },
  []
);

export default photosReducer;
