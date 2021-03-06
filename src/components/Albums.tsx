import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAlbum, loadAlbums, removeLastAlbum } from "../redux/actions/albums";
import { getAllAlbums } from "../redux/selectors/albums";

const Albums: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAllAlbums);

  React.useEffect(() => {
    dispatch(loadAlbums());
  }, []);

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

      <ul>
        {albums.map((album) => (
          <li>{album.title}</li>
        ))}
      </ul>

      <button onClick={handleAddAlbum}>Add album</button>
      <button onClick={handleRemoveLastAlbum}>Remove last album</button>
    </div>
  );
};

export default Albums;
