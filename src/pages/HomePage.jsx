import React from "react";
import SliderComponet from "../components/navbar/sliderComponet";
import { motion } from "framer-motion";
import featureIMg1 from "../images/Rectangle 299.png";
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
                    <img
                      src={items.img}
                      className="img-fluid Img1"
                      alt="images"
                    />
                    <div className="feature-contents">
                      <h3 className="mb-4">{items.header}</h3>
                      <p className="mb-5">{items.para}</p>
                      <div className="feature-contents-footer">
                        <AvatarComp />
                        <p>{items.footer}</p>
                        <button>
                          <BsArrowRightCircle className="icons arrow-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {featureContents2.map((items) => (
                  <div className="feature-Content-container" key={items.id}>
                    <div className="feature-contents">
                      <h3 className="mb-4">{items.header}</h3>
                      <p className="mb-5">{items.para}</p>
                      <div className="feature-contents-footer">
                        <AvatarComp />
                        <p>{items.footer}</p>
                        <button>
                          <BsArrowRightCircle className="icons arrow-icon" />
                        </button>
                      </div>
                    </div>
                    <img
                      src={items.img}
                      className="img-fluid Img1"
                      alt="images"
                    />
                  </div>
                ))}
                {featureContents3.map((items) => (
                  <div className="feature-Content-container" key={items.id}>
                    <img
                      src={items.img}
                      className="img-fluid Img1"
                      alt="images"
                    />
                    <div className="feature-contents">
                      <h3 className="mb-4">{items.header}</h3>
                      <p className="mb-5">{items.para}</p>
                      <div className="feature-contents-footer">
                        <AvatarComp />
                        <p>{items.footer}</p>
                        <button>
                          <BsArrowRightCircle className="icons arrow-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
        <div className="Home-auction-Container">
          <div className="container">
            <h1 className="home-auction-header">
              See Upcoming Auctions and Exhibitions
            </h1>
            <hr className="Rule" />
            <div className="home-auction-content">
              <h1>MONALISA REDEFINED IN STYLE.</h1>
              <div className="auctionContents">
                <h2>01</h2>
                <div className="monday">
                  <span>Start on : 08:00 GTS . Monday</span>
                  <p>
                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                    HIGHEST AND LOWEST BIDS.
                  </p>
                </div>
                <div className="seeMore">
                  <p>See more</p>
                  <button>Set a reminder</button>
                </div>
              </div>
            </div>
          </div>
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
];

const featureContents2 = [
  {
    id: 2,
    img: featureIMg3,
    header: "Are We There Yet?",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    footer: "64 major creators",
  },
];

const featureContents3 = [
  {
    id: 3,
    img: featureIMg1,
    header: "Oloibiri 1997",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    footer: "64 major creators",
  },
];
