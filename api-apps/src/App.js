import React from "react";
import Images from "./components/Images";
import Videos from "./components/Videos";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="images" />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
};

export default App;

// Image components

/* <ImageSearchBar onImgSearchSubmit={onImgSearchSubmit} />
<ImageList images={images} /> */

//Video components

/* <VideoSearchBar onVideoSearchSubmit={onVideoSearchSubmit} />
<div className="mx-auto row">
<VideoPlay video={selectedVideo} />
<VideoList videos={videos} onVideoClick={onVideoClick} />
     </div> */
