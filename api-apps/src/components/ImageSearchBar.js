import React, { useState } from "react";

const ImageSearchBar = ({ onImgSearchSubmit }) => {
  const [imgTerm, setImgTerm] = useState("");

  const onImgFormSubmit = (event) => {
    event.preventDefault();
    onImgSearchSubmit(imgTerm);
  };

  const onImgInputChange = (event) => {
    setImgTerm(event.target.value);
  };
  return (
    <form onSubmit={onImgFormSubmit} className="card p-3 mx-5 my-2 bg-light">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Image Search
      </label>
      <input
        type="text"
        onChange={onImgInputChange}
        value={imgTerm}
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Enter image search text!"
      />
    </form>
  );
};

export default ImageSearchBar;
