import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPhoto, removeLastPhoto } from "../redux/actions/photos";
import { getAllPhotos } from "../redux/selectors/photos";

const Photos: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const photos = useSelector(getAllPhotos);

  const handleAddPhoto = () => {
    dispatch(
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
    dispatch(removeLastPhoto());
  };

  return (
    <div>
      <h2>Photos</h2>

      <ul>
        {photos.map((photo) => (
          <li>{photo.title}</li>
        ))}
      </ul>

      <button onClick={handleAddPhoto}>Add photo</button>
      <button onClick={handleRemoveLastPhoto}>Remove last photo</button>
    </div>
  );
};

export default Photos;
