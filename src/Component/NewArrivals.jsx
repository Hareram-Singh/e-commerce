import React from "react";
import { PRODUCTS1 } from "./Products";
const NewArrivals = () => {
  return (
    <div>
      <div className="new-products row mt-4">
        {PRODUCTS1.slice(1, 5).map((product) => (
          <div className="col-3">
            <div key={product.id}>
              <div className="card p-3">
                <img
                  src={product.image}
                  alt=""
                  className="card-img-top img-fluid m-auto p-3"
                />
                <div className="card-details">
                  <div className="title mb-3">
                    <span>{product.brand}</span>
                    <h5 className="mt-2">{product.name}</h5>
                  </div>
                  <div className="card-footer text-center">
                    <p className="mb-2 text-danger fw-75">{product.status}</p>
                    <p>
                      <strike className="rate">{product.rate}</strike>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
