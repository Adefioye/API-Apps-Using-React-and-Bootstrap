import React, { useState } from "react";

const ImageCard = ({ image }) => {
  const [span, setSpan] = useState(0);
  const imageRef = React.createRef();

  const calculateSpans = (event) => {
    const imageHeight = event.currentTarget.clientHeight;
    console.log(imageHeight);
    const spans = Math.ceil(imageHeight / 10);
    setSpan(spans);
    console.log(spans);
  };
  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img
        onLoad={calculateSpans}
        ref={imageRef}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
