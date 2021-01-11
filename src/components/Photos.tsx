import * as React from "react";

import store from "../redux";
import { addPhoto, removeLastPhoto } from "../redux/actions/photos";

const Photos: React.FunctionComponent = () => {
  const handleAddPhoto = () => {
    store.dispatch(
      addPhoto({
        albumId: 1,
        id: 1,
        title: "My Photo",
        url: "image.jpg",
        thumbnailUrl: "thumbnail.jpg",
      })
    );
  };

  const handleRemoveLastPhoto = () => {
    store.dispatch(removeLastPhoto());
  };

  return (
    <div>
      <h2>Photos</h2>

      <button onClick={handleAddPhoto}>Add photo</button>
      <button onClick={handleRemoveLastPhoto}>Remove last photo</button>
    </div>
  );
};

export default Photos;
