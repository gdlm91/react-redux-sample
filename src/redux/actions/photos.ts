import { createAction } from "redux-actions";
import { Photo } from "../../types";

export const addPhoto = createAction("ADD_PHOTO", (photo: Photo) => ({
  photo,
}));

export const removeLastPhoto = createAction("REMOVE_LAST_PHOTO");
