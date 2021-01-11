import * as React from "react";

import store from "../redux";

const Albums: React.FunctionComponent = () => {
  const handleAddAlbum = () => {
    store.dispatch({
      type: "ALBUMS_ADD",
      payload: {
        album: {
          userId: 1,
          id: 1,
          title: "My title",
        },
      },
    });
  };

  const handleRemoveLastAlbum = () => {
    store.dispatch({
      type: "ALBUMS_REMOVE_LAST",
    });
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
