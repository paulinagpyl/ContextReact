import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const liked = photos.filter((photo) => photo.liked);
  
 //carga los datos del archivo json
  useEffect(() => {
    fetch("./photos.json")
      .then((res) => res.json())
      .then(({ photos }) => {
        setPhotos(photos);
      });
  }, []);

  // cambia el liked que tenia originalmente
  const changeLike = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, liked: !photo.liked };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  
  const globalState = { photos, liked, changeLike }
  return (
    <PhotoContext.Provider value={globalState}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
