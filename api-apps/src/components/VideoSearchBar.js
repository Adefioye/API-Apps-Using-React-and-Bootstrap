import React, { useState, useEffect } from "react";

const VideoSearchBar = ({ onVideoSearchSubmit }) => {
  const [videoTerm, setVideoTerm] = useState();

  const onVideoFormSubmit = (event) => {
    event.preventDefault();
    onVideoSearchSubmit(videoTerm);
  };

  useEffect(() => {
    onVideoSearchSubmit("Carl Sagan");
  }, [onVideoSearchSubmit]);

  const onVideoInputChange = (event) => {
    setVideoTerm(event.target.value);
  };
  return (
    <form onSubmit={onVideoFormSubmit} className="card p-3 mx-5 my-2 bg-light">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Search for video text
      </label>
      <input
        type="text"
        onChange={onVideoInputChange}
        value={videoTerm}
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Enter video search text!"
      />
    </form>
  );
};

export default VideoSearchBar;
