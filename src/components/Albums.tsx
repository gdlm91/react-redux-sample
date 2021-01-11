import * as React from "react";
import { useDispatch } from "react-redux";

import { addAlbum, removeLastAlbum } from "../redux/actions/albums";

const Albums: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAddAlbum = () => {
    dispatch(
      addAlbum({
        id: 1,
        title: "My album",
        userId: 1,
      })
    );
  };

  const handleRemoveLastAlbum = () => {
    dispatch(removeLastAlbum());
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
