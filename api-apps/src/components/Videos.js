import React, { useState, useEffect, useCallback } from "react";
import VideoSearchBar from "./VideoSearchBar";
import VideoList from "./VideoList";
import VideoPlay from "./VideoPlay";
import youtube from "../apis/youtube";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSearchSubmit = useCallback(async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  }, []);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div>
      <VideoSearchBar onVideoSearchSubmit={onVideoSearchSubmit} />
      <div className="container">
        <div className="row">
          <VideoPlay video={selectedVideo} />
          <VideoList videos={videos} onVideoClick={onVideoClick} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
