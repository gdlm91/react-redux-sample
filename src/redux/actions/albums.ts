import { createAction } from "redux-actions";
import { Album } from "../../types";

export const addAlbum = createAction("ADD_ALBUM", (album: Album) => ({
  album,
}));

export const removeLastAlbum = createAction("REMOVE_LAST_ALBUM");
