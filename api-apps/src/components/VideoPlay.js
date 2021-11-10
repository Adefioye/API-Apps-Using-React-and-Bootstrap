import React from "react";
import "./VideoPlay.css";

const VideoPlay = ({ video }) => {
  if (!video) {
    return "Loading...";
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-card col-7 card mb-3">
      <div className="video-container">
        <iframe
          src={videoSrc}
          className="video-player"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">
          <small className="text-muted">{video.snippet.publishedAt}</small>
        </p>
      </div>
    </div>
  );
};

export default VideoPlay;
