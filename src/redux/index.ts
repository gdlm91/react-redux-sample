import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { AppState } from "../types";
import rootSaga from "./sagas/";
import albumsReducer from "./reducers/albums";
import photosReducer from "./reducers/photos";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  // reducer
  combineReducers<AppState>({
    albums: albumsReducer,
    photos: photosReducer,
  }),

  // middlewares
  // activate redux dev tool
  composeWithDevTools({})(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
