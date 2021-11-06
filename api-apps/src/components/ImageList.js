import React from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    );
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
