import React from "react";
import SliderComponet from "../components/navbar/sliderComponet";
import { motion } from "framer-motion";
import featureIMg1 from "../images/egypt.png";
import featureIMg2 from "../images/Rectangle 2990.png";
import featureIMg3 from "../images/Rectangle 29.png";
import { BsArrowRightCircle } from "react-icons/bs";
import AvatarComp from "../components/avatar/AvatarComp";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div>
        <div className="container mainContainer">
          <main className="Home-cotainer">
            <div className="Home-container-header">
              <h1 className="text-center">
                Photography is poetry & beautiful untold stories
              </h1>
              <p className="text-center header-p mt-4">
                Flip through more than 10,000 vintage shots, old photograghs,
                historic images and captures seamlessly in one place. Register
                to get top access.
              </p>
            </div>
          </main>
        </div>
        <SliderComponet />
        <div className="container mainContainer">
          <main className="Home-cotainer">
            <div className="Home-container-body">
              <h2 className="mb-4">Featured products</h2>
              <div className="feature-Content-Maincontainer">
                {featureContents.map((items) => (
                  <div className="feature-Content-container" key={items.id}>
                    <img src={items.img} className="img-fluid" alt="images" />
                    <div className="feature-contents">
                      <h3 className="mb-4">{items.header}</h3>
                      <p className="mb-5">{items.para}</p>
                      <div className="feature-contents-footer">
                        <AvatarComp />
                        <p>{items.footer}</p>
                        <button>
                          <BsArrowRightCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;

const featureContents = [
  {
    id: 1,
    img: featureIMg2,
    header: "The Boolean Egyptian",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    footer: "64 major creators",
  },
  // {
  //   id: 2,
  //   img: featureIMg3,
  //   header: "The Boolean Egyptian",
  //   para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
  //   footer: "64 major creators",
  // },
  // {
  //   id: 3,
  //   img: featureIMg1,
  //   header: "The Boolean Egyptian",
  //   para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
  //   footer: "64 major creators",
  // },
];
