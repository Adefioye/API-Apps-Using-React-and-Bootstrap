import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  return (
    <div
      onClick={() => onVideoClick(video)}
      className="set-pointer h-20 card mb-3 mx-2"
    >
      <div className="row g-0">
        <div className="col-4">
          <img
            src={video.snippet.thumbnails.medium.url}
            className="fix-image img-thumbnail rounded-start"
            alt={video.snippet.description}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">
              <small class="text-muted">{video.snippet.channelTitle}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">{video.snippet.publishedAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
