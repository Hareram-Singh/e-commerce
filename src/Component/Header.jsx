import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/ballia4.png";
import { AiFillHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import { ShopContext } from "./ShopContext";

const Header = () => {
  const location = useLocation();
  const { getTotalCartProducts } = useContext(ShopContext);
  const totalproducts = getTotalCartProducts();
  return (
    <div>
      <header className="header-top-strip p-1 px-4 shadow-md ">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+919140735665"> Call us +919140735665 </a>
              </div>

              <div>
                <Link>
                  {" "}
                  <BiPhoneCall className="fs-3 ms-4" />{" "}
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper px-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 m-auto text-center ">
              <Link to="/">
                <img src={logo} alt="logo" className="img-fluid logo" />
              </Link>
            </div>

            <div className="col-3 d-flex align-items-center mt-2">
              <div className="input-group mb-3 d-flex mt-2">
                <span className="input-group-text basic-addon1">All</span>
                <input
                  type="text"
                  className="form-control p-2 "
                  placeholder="Find products ..."
                  aria-label="Find products ..."
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basicaddon2">
                  Search
                </button>
              </div>
            </div>

            <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto ">
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : "inactive"}
              >
                Home
              </Link>
              <Link
                to={"shop"}
                className={
                  location.pathname === "/shop" ? "active" : "inactive"
                }
              >
                Shop
              </Link>
              <Link
                to={"blog"}
                className={
                  location.pathname === "/blog" ? "active" : "inactive"
                }
              >
                Blog
              </Link>
              <Link
                to={"about"}
                className={
                  location.pathname === "/about" ? "active" : "inactive"
                }
              >
                About
              </Link>
              <Link
                to={"contact"}
                className={
                  location.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </Link>
            </div>
            <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link
                to={"wishlist"}
                className={
                  location.pathname === "/wishlist" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <AiFillHeart className="fs-3 mx-2" />
                  </span>
                  <p>Wishlist</p>
                </div>
              </Link>
              <Link
                to={"login"}
                className={
                  location.pathname === "/login" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <VscAccount className="fs-3 mx-2" />
                  </span>
                  <p>Account</p>
                </div>
              </Link>
              <Link
                to={"Cart"}
                className={
                  location.pathname === "/Cart" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <CgShoppingCart className="fs-3 mx-2" />
                  </span>
                  <p>
                    Cart
                    <span className="text-danger">
                      {totalproducts > 0 && `(${totalproducts})`}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
