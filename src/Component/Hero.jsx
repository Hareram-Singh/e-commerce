import React from "react";
import icon from "../assets/Images/icons/icon1.png";
import icon1 from "../assets/Images/icons/icon2.png";
import icon2 from "../assets/Images/icons/icon3.png";
import icon3 from "../assets/Images/icons/icon4.png";
import icon4 from "../assets/Images/icons/icon5.png";
import icon5 from "../assets/Images/icons/icon6.png";

const Heros = () => {
  return (
    <div>
      <section className="hero p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-details d-flex justify-content-around text-center">
              <div className="card p-2">
                <div className="card-details mx-3">
                  <img src={icon} alt=" " className="img-fluid"></img>
                  <p>Fast Orders</p>
                </div>
              </div>

              <div className="card p-2">
                <div className="card-details mx-3">
                  <img src={icon1} alt=" " className="img-fluid mb-2"></img>
                  <p>Quick Shipping</p>
                </div>
              </div>

              <div className="card p-2">
                <div className="card-details mx-3">
                  <img src={icon2} alt=" " className="img-fluid mb-2"></img>
                  <p>More Saving</p>
                </div>
              </div>

              <div className="card p-2">
                <div className="card-details mx-3">
                  <img src={icon4} alt=" " className="img-fluid"></img>
                  <p>More Discount</p>
                </div>
              </div>

              <div className="card p-2">
                <div className="card-details mx-3">
                  <img src={icon3} alt=" " className="img-fluid"></img>
                  <p>24x7 Support</p>
                </div>
              </div>

              <div className="card p-2">
                <div className="card-details mx-3">
                  <img src={icon5} alt=" " className="img-fluid"></img>
                  <p>Quality products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heros;
