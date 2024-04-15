import React from "react";
import img1 from "../assets/Images/About/a6.jpg";
import { Link } from "react-router-dom";
import video from "../assets/Images/About/1.mp4";
import blog from "../assets/Images/blog/blog-1.jpg";
import blog1 from "../assets/Images/blog/blog-2.jpg";
import blog2 from "../assets/Images/blog/blog-3.jpg";
import blog3 from "../assets/Images/blog/blog-6.jpg";
import blog4 from "../assets/Images/blog/blog-4.jpg";
import Marquee from "react-fast-marquee";
import icon from "../assets/Images/icons/icon1.png";
import icon1 from "../assets/Images/icons/icon2.png";
import icon2 from "../assets/Images/icons/icon3.png";
import icon3 from "../assets/Images/icons/icon4.png";
import icon4 from "../assets/Images/icons/icon5.png";
import icon5 from "../assets/Images/icons/icon6.png";
import Hero from "../Component/Hero";

const About = () => {
  return (
    <div>
      <section className="about-wrapper p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white">#Know Us</h1>
              <h6 className="text-white">Take a moment to know us better...</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="know-us p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <div className="col-6">
                <img src={img1} className="img-fluid p-4" />
              </div>

              <div className="col-6 d-flex flex-column text-center justify-content-center align-items-center p-4">
                <div className="mb-3">
                  <h1>Who are we?</h1>
                </div>
                <div className="mb-3">
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book. It usually begins with: “Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.” The purpose of
                    lorem ipsum is to create a natural looking block of text
                    (sentence, paragraph, page, etc.) that doesn't distract from
                    the layout. A practice not without controversy, laying out
                    pages with meaningless{" "}
                  </p>
                </div>
                <div>
                  <Link className="fs-3 " to={"/contact"}>
                    contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
        <div className="container-xxl">
          <div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4">
                <h2 className="text-center">
                  Download our{" "}
                  <Link className="fs-4">
                    <b>App</b>
                  </Link>
                </h2>
              </div>

              <div className="col-6 mb-3">
                <video loop autoPlay src={video}></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-5">
              <h1>What our Customer Say</h1>
              <h6>Get To know what our trusted customers say</h6>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3 ">
                <div className=" d-flex">
                  <div className="col-5 p-3 ">
                    <img src={blog} className="img-fluid card-img-top" />
                  </div>

                  <div className="card-body col-7 p-4 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3  ">
                <div className="p-3 d-flex">
                  <div className="col-5  ">
                    <img src={blog1} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3  ">
                <div className="p-3 d-flex">
                  <div className="col-5  ">
                    <img src={blog2} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3 ">
                <div className="p-3 d-flex">
                  <div className="col-5  ">
                    <img src={blog3} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3 ">
                <div className="p-3 d-flex">
                  <div className="col-5  ">
                    <img src={blog1} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details mb-3 ">
                <div className="p-3 d-flex">
                  <div className="col-5  ">
                    <img src={blog4} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Marquee className="p-2 slide">
                <div className="card mx-3">
                  <img src={icon} alt="" className="img-fluid" />
                  <p className="card-text">Fast Order</p>
                </div>
                <div className="card mx-3">
                  <img src={icon1} alt="" className="img-fluid" />
                  <p className="card-text">Quick Shipping</p>
                </div>
                <div className="card mx-3">
                  <img src={icon2} alt="" className="img-fluid" />
                  <p className="card-text">More Shaving</p>
                </div>
                <div className="card mx-3">
                  <img src={icon3} alt="" className="img-fluid" />
                  <p className="card-text">More Discount</p>
                </div>
                <div className="card mx-3">
                  <img src={icon4} alt="" className="img-fluid" />
                  <p className="card-text">24x7 Support</p>
                </div>
                <div className="card mx-3">
                  <img src={icon5} alt="" className="img-fluid" />
                  <p className="card-text">Quality products</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
