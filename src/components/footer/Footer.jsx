import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="Footer-Container p-2">
      <div className="container">
        <div className="footerContent d-md-flex justify-content-between p-2 align-items-center g-5">
          <div className="footer-logo">
            <a href="/" className="header-link text-decoration-none">
              <h1 className=" text-dark display-4">ARTSY.</h1>
            </a>
          </div>
          <div className="footer1items">
            {FooterItems.map((items) => (
              <div className="navlist_Container" key={items.id}>
                <Link to={items.path} className=" text-decoration-none">
                  <li className="navlist_Items text-black h4 my-sm-3">
                    {items.text}
                  </li>
                </Link>
              </div>
            ))}
          </div>
          <div className="footer2Items">
            {FooterItems2.map((items) => (
              <div className="navlist_Container" key={items.id}>
                <li className="navlist_Items text-black h4">{items.text}</li>
              </div>
            ))}
          </div>
          <div className="footer3items">
            <li className="h3">
              <GoLocation />
              artsystudios@gmail.com
            </li>
            <li className="h3 mt-3">
              <AiOutlineMail /> Lagos, Nigeria.
            </li>
          </div>
        </div>
        <div className="footeryear text-center mt-5">
          <p className="h5">
            Artsystudios © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const FooterItems = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "Marketplace",
    path: "/marketplace",
  },
  {
    id: 3,
    text: "Auctions",
    path: "/auction",
  },
  {
    id: 4,
    text: "Drop",
    path: "/drop",
  },
];

const FooterItems2 = [
  {
    id: 1,
    text: "Blog",
  },
  {
    id: 2,
    text: "Wallets",
  },
  {
    id: 3,
    text: "Rates",
  },
  {
    id: 4,
    text: "High bids",
  },
];
