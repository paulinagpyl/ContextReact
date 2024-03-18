import React, { useContext } from "react";
import { PhotoContext } from "../store/PhotoContext";
import Card from "../components/Card";

const Favorites = () => {
  const { liked } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {liked.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Favorites;
