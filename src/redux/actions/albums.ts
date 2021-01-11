import { createAction } from "redux-actions";
import { Album } from "../../types";

export const addAlbum = createAction("ADD_ALBUM", (album: Album) => ({
  album,
}));

export const removeLastAlbum = createAction("REMOVE_LAST_ALBUM");

export const loadAlbums = createAction("LOAD_ALBUMS");

export const albumsLoaded = createAction(
  "ALBUMS_LOADED",
  (albums: Album[]) => ({
    albums,
  })
);
