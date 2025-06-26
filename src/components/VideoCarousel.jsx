import React from 'react';

const videos = [
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845364/vid1_mm2uvu.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845363/vid3_opanbh.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750921285/WhatsApp_Video_2025-06-26_at_12.30.24_PM_1_nfeczr.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750921285/WhatsApp_Video_2025-06-26_at_12.30.25_PM_imhoqk.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750921286/WhatsApp_Video_2025-06-26_at_12.30.24_PM_xxjmaq.mp4"
];

const VideoDisplay = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
      {videos.map((src, index) => (
        <div
          key={index}
          className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-[9/16] sm:aspect-[16/9]"
        >
          <video
            src={src}
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
