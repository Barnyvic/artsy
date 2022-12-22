import React, { useState } from "react";
import SliderComponet from "../components/navbar/sliderComponet";
import { motion } from "framer-motion";
import featureIMg1 from "../images/Rectangle 299.png";
import featureIMg2 from "../images/Rectangle 2990.png";
import featureIMg3 from "../images/Rectangle 29.png";
import { BsArrowRightCircle } from "react-icons/bs";
import AvatarComp from "../components/avatar/AvatarComp";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import GirlImage from "../images/agirl.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function HomePage() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

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
              <h1
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="700"
              >
                Photography is poetry & beautiful untold stories
              </h1>
              <p
                className="text-center header-p mt-4"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              >
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
              <motion.div className="feature-Content-Maincontainer">
                {featureContents.map((items) => (
                  <div
                    className="feature-Content-container"
                    key={items.id}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="2000"
                  >
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
                  <div
                    className="feature-Content-container"
                    key={items.id}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="2000"
                  >
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
                  <div
                    className="feature-Content-container"
                    key={items.id}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="2000"
                  >
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
              </motion.div>
            </div>
          </main>
        </div>
        <div className="Home-auction-Container">
          <div className="container">
            <h1 className="home-auction-header">
              See Upcoming Auctions and Exhibitions
            </h1>
            <hr className="Rule" />
            <div
              className="home-auction-content"
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-delay="2000"
            >
              <ul className="auction-list">
                <li>MONALISA REDEFINED IN STYLE.</li>
              </ul>
              <div className="auctionContents">
                <div className="div1">
                  <h2>01</h2>
                  <div className="monday">
                    <span>Start on : 08:00 GTS . Monday</span>
                    <p>
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </p>
                  </div>
                </div>
                <div className="seeMore">
                  <p>See more</p>
                  <button>Set a reminder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-Market-Container">
          <div className="container py-5">
            <div className="explore text-center border1">
              <Link
                to={"/marketplace"}
                className="d-flex align-items-center justify-content-evenly text-decoration-none py-2 text-dark"
              >
                <p className="link2">Explore marketplace</p>
                <AiOutlineArrowRight className="icons icon2" />
              </Link>
            </div>
            <div className="explore text-center border2">
              <Link
                to={"/auction"}
                className="d-flex align-items-center justify-content-evenly text-decoration-none py-2 text-dark"
              >
                <p className="link2 ">See auctions </p>
                <AiOutlineArrowRight className="icons icon2 ic3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="top-Creator-MainContainer p-3">
          <div className="container top-creator_container p-2">
            <div className="topcreator d-flex align-items-center justify-content-between">
              <p className=" h2">TOP CREATORS OF THE WEEK</p>
              <div className="fillColor">
                <div className="fill">
                  <div className="color"></div>
                </div>
                <ul>
                  <li>Editorials</li>
                  <li>Fashion</li>
                  <li>Lifestyle</li>
                  <li>Blueprint</li>
                </ul>
              </div>
            </div>
            <div
              className="topcreatorContent2 py-3"
              data-aos="zoom-in-down"
              data-aos-delay="2000"
            >
              <p>
                “Everything always looked better in black and white. Everything
                always as if it were the first time; there’s always more people
                in a black and white photograph. It just makes it seem that
                there were more people at a gig, more people at a football
                match, than with colour photography. Everything looks more
                exciting.”– Jack Lowden
              </p>
            </div>
            <div className="topCreatorContent3">
              <p></p>
              <p className="year1">1985</p>
            </div>
            <div className="topcreator-Img img-fluid">
              <img
                src={GirlImage}
                alt="a girl looking "
                className=" img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="NewsLettter">
          <div className="container p-1">
            <div
              className=" border border-dark p-5"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="2000"
            >
              <p className=" text-center h1">NewsLetter</p>
              <p className="text-center h5">
                Subscribe to get daily updates on new drops & exciting deals
              </p>
              <form>
                <div className="form-group text-center d-md-flex justify-content-center align-items-center gap-4 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email"
                    value={text}
                    onChange={handleChange}
                  />
                  <button type="submit" className="btn btn-dark py-2 px-4">
                    Subscribe
                  </button>
                </div>
              </form>
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
