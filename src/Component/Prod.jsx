import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Prod = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div key={id} className="col-3 mb-4">
        <div className="card h-100 m-auto">
          <div className="p-2">
            <img src={image} alt="" className="img-fluid card-img-top" />
          </div>
          <div className="card-details p-3">
            <span>{brand}</span>
            <h5 className="my-2">{name}</h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={4}
              size={24}
              activeColor="#cca27e"
            />
            <p className="price mb-3 my-2">
              ₹{price}{" "}
              <span className="text-danger">
                &nbsp;<strike>₹{price * 2}</strike>
              </span>
            </p>

            <div className="d-flex mb-2">
              <div className="d-flex align-items-center justify-content-around col-6 ">
                <Link
                  to={"/details"}
                  className="view-button"
                  onClick={() => viewProductDetails(id)}
                >
                  View Details
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-around col-6">
                <button
                  className="add-btn"
                  onClick={() => {
                    addToCart(id);
                    event.target.classlist.toggle("red");
                  }}
                >
                  Add To Cart{cartItemCount > 0 && `(${cartItemCount})`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prod;
