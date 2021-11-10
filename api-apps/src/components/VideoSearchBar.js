import React, { useState } from "react";

const VideoSearchBar = ({ onVideoSearchSubmit }) => {
  const [videoTerm, setVideoTerm] = useState("Carl Sagan");

  const onVideoFormSubmit = (event) => {
    event.preventDefault();
    onVideoSearchSubmit(videoTerm);
  };

  const onVideoInputChange = (event) => {
    setVideoTerm(event.target.value);
  };
  return (
    <form onSubmit={onVideoFormSubmit} className="card p-3 mx-5 my-2 bg-light">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Video Search
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
