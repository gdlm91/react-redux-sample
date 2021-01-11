import * as React from "react";
import { useDispatch } from "react-redux";

import store from "../redux";
import { addAlbum, removeLastAlbum } from "../redux/actions/albums";
import { Album } from "../types";

const Albums: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [albums, setAlbums] = React.useState<Album[]>([]);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { albums: _albums } = store.getState();

      setAlbums(_albums);
    });

    return () => unsubscribe();
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
