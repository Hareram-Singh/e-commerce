import React from "react";
import { Link } from "react-router-dom";
import Heros from "../Component/Hero";
import FeaturedProducts from "../Component/FeaturedProducts";
import NewArrivals from "../Component/NewArrivals";
import img1 from "../assets/Images/banner/b17.jpg";
import img2 from "../assets/Images/banner/b10.jpg";
import Blogs from "../Component/blogs";
const Home = () => {
  return (
    <div>
      <section className="banner ">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-lg p-2  text-White">Trade in offer!</span>
              <h1>Super Value Deals</h1>
              <h2>On All products</h2>
              <p className="p-2 m-0 text-black">Save more with Ballians</p>
              <Link to={'/shop'} className="button-link mb-3">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Heros />
      </div>

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Featured Products </h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>

      <section className="repair">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details text-center d-flex flex-column align-items-center p-3">
              <span className="text-white mt-2">Repair Services</span>
              <h2 className="text-white">
                On{" "}
                <span className="text-primary">
                  <b>70%</b>
                </span>{" "}
                off on All Products And Accessories
              </h2>
              <Link to={'http://localhost:5173/shop'}><button className="button-repair mt-3">Explore Now</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>New Arrivals</h1>
              <p>Your Best Design Outfits</p>
            </div>
            <NewArrivals />
          </div>
        </div>
      </section>

      <section className="deals p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="colmd-4">
                    <img
                      src={img1}
                      alt=""
                      className="img-fluid rounded-start h-100 p-2"
                    ></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Hot Deals</span>
                      <h3 className="card-title">Buy One get One free</h3>
                      <p>
                        The latest best collection in our closet Feel Cute with
                        our Outfits{" "}
                      </p>

                      <Link to={'http://localhost:5173/blog'}><button className="button-deals mt-3">Learn More</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-4">
              <div className="card row">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img
                      src={img2}
                      alt=""
                      className="img-fluid rounded-start h-100 p-2"
                    ></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Hot Deals</span>
                      <h3 className="card-title">Buy One get One free</h3>
                      <p>
                        The latest best collection in our closet Feel Cute with
                        our Outfits{" "}
                      </p>

                      <Link to={'http://localhost:5173/blog'}><button className="button-deals mt-3">Learn More</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-2 ">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="text-center mb-4">
              <h1>What our customers say...</h1>
              <p>Our customers never miss a bit on providing feedback</p>
            </div>
            <Blogs />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
