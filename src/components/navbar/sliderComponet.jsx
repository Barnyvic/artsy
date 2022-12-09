import React from "react";
import sliderImg1 from "../../images/Rectangle 230.png";
import sliderImg2 from "../../images/Rectangle 231.png";
import sliderImg3 from "../../images/Rectangle 232.png";
import sliderImg4 from "../../images/Rectangle 233.png";
import sliderImg5 from "../../images/Rectangle 234.png";
import sliderImg6 from "../../images/Rectangle 254.png";
import { motion } from "framer-motion";

function SliderComponet() {
  return (
    <motion.div className="my-5">
      <div className="slider-Container">
        <motion.img
          src={sliderImg1}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          whileTap={{ scale: 2 }}
          alt="a boy on glasses"
          className="img-fluid card"
        />
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          src={sliderImg2}
          alt="a hand holding leaf"
          className="img-fluid card"
        />
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          src={sliderImg3}
          alt="a girl starring"
          className="img-fluid card card3"
        />
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          src={sliderImg4}
          alt="a kangarrow"
          className="img-fluid card"
        />
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          src={sliderImg5}
          alt=" a handing holding fruit"
          className="img-fluid card"
        />
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 2 }}
          transition={{ duration: 2, type: "spring", stiffness: 60 }}
          src={sliderImg6}
          alt="two girls"
          className="img-fluid card"
        />
      </div>
    </motion.div>
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
