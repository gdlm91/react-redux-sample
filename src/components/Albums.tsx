import * as React from "react";

import store from "../redux";
import { addAlbum, removeLastAlbum } from "../redux/actions/albums";

const Albums: React.FunctionComponent = () => {
  const handleAddAlbum = () => {
    store.dispatch(
      addAlbum({
        id: 1,
        title: "My album",
        userId: 1,
      })
    );
  };

  const handleRemoveLastAlbum = () => {
    store.dispatch(removeLastAlbum());
  };

  return (
    <div>
      <h2>Albums</h2>

      <button onClick={handleAddAlbum}>Add album</button>
      <button onClick={handleRemoveLastAlbum}>Remove last album</button>
    </div>
  );
};

export default Albums;
