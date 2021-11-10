import React, { useState } from "react";
import ImageSearchBar from "./components/ImageSearchBar";
import ImageList from "./components/ImageList";
import unsplash from "./apis/unsplash";
import VideoSearchBar from "./components/VideoSearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoPlay from "./components/VideoPlay";

const App = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const onImgSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    setImages(response.data.results);
  };
  return (
    <div>
      <VideoSearchBar onVideoSearchSubmit={onVideoSearchSubmit} />
      <div className="row">
        <VideoPlay video={selectedVideo} />
        <VideoList videos={videos} onVideoClick={onVideoClick} />
      </div>
    </div>
  );
};

export default App;

// Image components
// <ImageSearchBar onImgSearchSubmit={onImgSearchSubmit} />
// <ImageList images={images} />
