import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../src/images/img6.jpg";
import img2 from "../../src/images/hd_image.png";
import img3 from "../../src/images/img9.webp";
import img5 from "../../src/images/img5.png";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-gray-800  p-4 rounded-full shadow-xl z-20 hover:bg-gray-300"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-gray-800  p-4 rounded-full shadow-xl z-20 hover:bg-gray-300"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-[900px] flex items-center justify-center bg-gray-200 overflow-hidden relative">
      <Slider {...settings} className="w-full h-full">
        <div>
          <img src={img1} alt="image1" className="w-full h-auto rounded" />
        </div>
        <div>
          <img src={img2} alt="image2" className="w-full h-auto rounded " />
        </div>
        <div>
          <img src={img3} alt="image3" className="w-full h-auto rounded" />
        </div>
        <div>
          <img src={img5} alt="image4" className="w-full h-auto rounded" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
