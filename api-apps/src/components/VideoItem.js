import React from "react";
import TimeAgo from "timeago-react";
import ReactToolTip from "react-tooltip";

const VideoItem = ({ video, onVideoClick }) => {
  return (
    <div
      onClick={() => onVideoClick(video)}
      className="set-pointer card mb-3 mx-2"
    >
      <div className="row g-0">
        <div className="col-4">
          <img
            src={video.snippet.thumbnails.medium.url}
            className="fix-image img-fluid rounded-start"
            alt={video.snippet.description}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6
              data-tip={video.snippet.title}
              data-for="display-full-title"
              className="card-title-truncate card-title"
            >
              {video.snippet.title}
            </h6>
            <ReactToolTip
              id="display-full-title"
              type="light"
              place="bottom"
              effect="float"
            />
            <p className="card-text">
              <small className="text-muted">{video.snippet.channelTitle}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                <TimeAgo datetime={video.snippet.publishedAt} />
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
