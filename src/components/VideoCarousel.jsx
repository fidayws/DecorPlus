import React from 'react';

const videos = [
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845364/vid1_mm2uvu.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845363/vid3_opanbh.mp4",
    "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845363/vid3_opanbh.mp4",

];



const VideoDisplay = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
      {videos.map((src, index) => (
        <div
          key={index}
          className="w-full h-[300px] relative rounded-xl overflow-hidden shadow-lg"
        >
          <video
            src={src}
            controls
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoDisplay;



