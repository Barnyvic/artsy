import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
                <li className="navlist_Items">Home</li>
                <li className="navlist_Items">Marketplace</li>
                <li className="navlist_Items">Auctions</li>
                <li className="navlist_Items">Drop</li>
              </ul>
            </div>
          </div>
        )}
        <div className="logo">
          <h1>ARTSY.</h1>
        </div>
        <ul className="navlist_Container">
          <li className="navlist_Items">Home</li>
          <li className="navlist_Items">Marketplace</li>
          <li className="navlist_Items">Auctions</li>
          <li className="navlist_Items">Drop</li>
        </ul>

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
