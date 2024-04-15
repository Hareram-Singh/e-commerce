import React, { useContext } from "react";
import { PRODUCTS, PRODUCTS1 } from "./Products";
import { ShopContext } from "./ShopContext";

const Productdetails = () => {
  const {
    updateCartItemCount,
    removeToCart,
    addToCart,
    cartItems,
    closeProductDetails,
    selectedProduct,
  } = useContext(ShopContext);

  const productId = selectedProduct || 0;
  const product =
    PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS1.find((p) => p.id === productId);
  return (
    <div>
      <div className="d-flex  justify-content-between">
        <div className="col-6 card">
          <img src={product.image} className="img-fluid p-4" />
        </div>
        <div className="col-6 card ">
          <div className="p-4 ">
            <span>{product.brand}</span>
            <h3 className="my-3"> {product.name}</h3>
            <div className="card-details">
              <p className="price my-3">
                <strike className="text-danger">₹{product.price * 2}</strike>{" "}
                &nbsp; ₹{product.price}
              </p>
              <p className="mb-3">{product.view}</p>
            </div>
            <button
              className="add-btn mx-2 mt-3"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              +
            </button>
            <input
              type="text"
              className="text-center"
              value={cartItems[product.id]}
              onchange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className="add-btn mx-2"
              onClick={() => {
                removeToCart(product.id);
              }}
            >
              -
            </button>

            <div className="input-group mb-3 mt-4">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Coupon Code..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text " id="basic-addon2">
                Apply
              </button>
            </div>

            <div className="card-footer">
              <h3 className="price my-3 text-center">
                More Products Of the same
              </h3>

              <div className="row mt-4">
                {PRODUCTS.slice(2, 6).map((product) => (
                  <div className="col-3">
                    <div key={product.id}>
                      <div className="card ">
                        <img
                          src={product.image}
                          alt=""
                          className="card-img-top img-fluid m-auto p-1 "
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row mt-4">
                {PRODUCTS1.slice(4, 7).map((product) => (
                  <div className="col-3">
                    <div key={product.id}>
                      <div className="card ">
                        <img
                          src={product.image}
                          alt=""
                          className="card-img-top img-fluid m-auto p-1 "
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
