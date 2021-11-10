import React from "react";
import "./VideoList.css";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem onVideoClick={onVideoClick} video={video} />;
  });
  return <div className="col-5">{renderedVideos}</div>;
};

export default VideoList;
