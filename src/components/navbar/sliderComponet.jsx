import React from "react";
import Slider from "react-slick";
import sliderImg1 from "../../images/Rectangle 230.png";
import sliderImg2 from "../../images/Rectangle 231.png";
import sliderImg3 from "../../images/Rectangle 232.png";
import sliderImg4 from "../../images/Rectangle 233.png";
import sliderImg5 from "../../images/Rectangle 234.png";

function SliderComponet() {
  return (
    <div>
      <Slider {...settings}>
        {SliderItems.map((sliders) => (
          <div key={sliders.id} className="slider-Container d-flex gap-3">
            <img src={sliders.img} alt="" className="img-fluid " />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponet;

const SliderItems = [
  {
    id: 1,
    img: sliderImg1,
  },
  {
    id: 2,
    img: sliderImg2,
  },
  {
    id: 3,
    img: sliderImg3,
  },
  {
    id: 4,
    img: sliderImg4,
  },
  {
    id: 5,
    img: sliderImg5,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
