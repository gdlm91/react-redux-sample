import { call, put, takeEvery } from "redux-saga/effects";

import { Album } from "../../types";
import { albumsLoaded, loadAlbums } from "../actions/albums";

function* fetchAlbums() {
  const albums: Album[] = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
      res.json()
    )
  );

  yield put(albumsLoaded(albums));
}

export default function* rootSaga() {
  yield takeEvery(loadAlbums.toString(), fetchAlbums);
}
