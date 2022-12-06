import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { pathname } = useLocation();

  return (
    <nav>
      <div className="container nav_Container">
        <div className="menuBar" onClick={handleClick}>
          <FiMenu className=" icons" />
        </div>
        {click && (
          <div className="navbar-smMenu">
            <div className="sm_Contents">
              <div className="smLogo">
                <h1>ARTSY.</h1>
                <button onClick={handleClick}>
                  <GrClose className="icons" />
                </button>
              </div>
              <ul className="navbar-smMenu-list ">
                <Link to="/" className={pathname === "/" ? "active" : "link"}>
                  <li className="navlist_Items" onClick={handleClick}>
                    Home
                  </li>
                </Link>
                <Link
                  to="/marketplace"
                  className={pathname === "/marketplace" ? "active" : "link"}
                >
                  <li className="navlist_Items" onClick={handleClick}>
                    Marketplace
                  </li>
                </Link>
                <Link
                  to="/auction"
                  className={pathname === "/auction" ? "active" : "link"}
                >
                  <li className="navlist_Items" onClick={handleClick}>
                    Auctions
                  </li>
                </Link>
                <Link
                  to="/drop"
                  className={pathname === "/drop" ? "active" : "link"}
                >
                  <li className="navlist_Items" onClick={handleClick}>
                    Drop
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
        <div className="logo">
          <a href="/" className="header-link">
            <h1>ARTSY.</h1>
          </a>
        </div>
        {NavItems.map((items) => (
          <div className="navlist_Container" key={items.id}>
            <Link
              to={items.path}
              className={pathname === items.path ? "active" : "link"}
            >
              <li className="navlist_Items">{items.text}</li>
            </Link>
          </div>
        ))}

        <div className="navIcons">
          <button>
            <BsSearch className="navIcons-items icons" />
          </button>
          <button>
            <BsCart className="navIcons-items icons" />
          </button>
          <button>
            <BsBell className="navIcons-items icons" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const NavItems = [
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
