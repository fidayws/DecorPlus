import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845364/vid1_mm2uvu.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750845363/vid3_opanbh.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750921285/WhatsApp_Video_2025-06-26_at_12.30.24_PM_1_nfeczr.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750921285/WhatsApp_Video_2025-06-26_at_12.30.25_PM_imhoqk.mp4",
  "https://res.cloudinary.com/dw1sh368y/video/upload/v1750921286/WhatsApp_Video_2025-06-26_at_12.30.24_PM_xxjmaq.mp4",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // tablets & small desktops
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const VideoDisplay = () => {
  return (
    <div className="py-4 px-4">
      <Slider {...settings}>
        {videos.map((src, index) => (
          <div key={index} className="px-2">
            <div
              className="relative w-full overflow-hidden rounded-xl shadow-lg h-[220px] sm:h-[240px] md:h-[280px] lg:h-[340px] xl:h-[400px] "
            >
              <video
                src={src}
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoDisplay;
