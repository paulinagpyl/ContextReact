import { useContext } from "react";
import { PhotoContext } from "../store/PhotoContext";
import IconHeart from "./IconHeart";
import "./Card.css";

const Card = ({ photo }) => {
  const { changeLike } = useContext(PhotoContext);

  return (
    <div className="card" key={photo.id} onClick={() => changeLike(photo.id)}>
      <div className="App">
        {photo.liked ? <IconHeart filled/>: <IconHeart />}
      </div> 
      <img src={photo.src.medium} alt={photo.title} />
      <div>
        <p>{photo.alt}</p>
        <h5 >Autor: {photo.photographer}</h5>
      </div>
    </div>
  );
};

export default Card;
