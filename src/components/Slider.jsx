import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-[-40px] mb-[20px]">
      <div className="slider-image">
        <img src="../../public/images/slider4.jpg" alt="Image 2" />
      </div>
      <div className="slider-image">
        <img src="../../public/images/slider6.webp" alt="Image 1" />
      </div>
      <div className="slider-image">
        <img src="../../public/images/slider5.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
