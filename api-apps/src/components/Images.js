import React, { useState } from "react";
import ImageSearchBar from "./ImageSearchBar";
import ImageList from "./ImageList";
import unsplash from "../apis/unsplash";

const Images = () => {
  const [images, setImages] = useState([]);

  const onImgSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    setImages(response.data.results);
  };
  return (
    <div>
      <ImageSearchBar onImgSearchSubmit={onImgSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default Images;
