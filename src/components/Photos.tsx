import * as React from "react";

import store from "../redux";

const Photos: React.FunctionComponent = () => {
  const handleAddPhoto = () => {
    store.dispatch({
      type: "PHOTOS_ADD",
      payload: {
        photo: {
          albumId: 1,
          id: 1,
          title: "My Photo",
          url: "google.com",
          thumbnailUrl: "google.com",
        },
      },
    });
  };

  const handleRemoveLastPhoto = () => {
    store.dispatch({
      type: "PHOTOS_REMOVE_LAST",
    });
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
