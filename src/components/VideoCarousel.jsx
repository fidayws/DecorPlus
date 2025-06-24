import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750310067/IMG_7630_xtvhof.mov",
  
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750310322/video2_blkrqn.mp4",
];

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false }
      }
    ]
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <Slider {...settings}>
        {videos.map((src, index) => (
          <div key={index} className="px-2">
            <video
              src={src}
              controls
              loop
              autoPlay
              muted
              className="w-full h-[60vh] object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;