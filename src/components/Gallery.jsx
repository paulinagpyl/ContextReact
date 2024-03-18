import { useContext } from "react";
import { PhotoContext } from "../store/PhotoContext";
import Card from "./Card";

const Gallery = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo)=>(
        <Card key = {photo.id} photo = {photo} onClick ={()=> changeLike(photo.id)}/>
      ))}
    </div>
  );
};

export default Gallery;
