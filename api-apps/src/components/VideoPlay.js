import React from "react";
import "./VideoPlay.css";

const VideoPlay = ({ video }) => {
  if (!video) {
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const dateTime = new Date(Date.parse(video.snippet.publishedAt));
  const month = dateTime.toLocaleString("en-US", { month: "short" });
  const day = dateTime.toLocaleString("en-US", { day: "numeric" });
  const year = dateTime.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="video-card col-7 g-0 card">
      <div className="video-container">
        <iframe
          src={videoSrc}
          className="video-player"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">
          <small className="text-muted">
            {month} {day}, {year}
          </small>
        </p>
      </div>
    </div>
  );
};

export default VideoPlay;
