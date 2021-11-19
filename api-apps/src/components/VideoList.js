import React from "react";
import "./VideoList.css";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoClick={onVideoClick}
        video={video}
      />
    );
  });
  return <div className="col-md mr-0">{renderedVideos}</div>;
};

export default VideoList;
