import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

const Cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <div>
      <tbody key={id}>
        <tr>
          <td className="col-3 ">
            <img src={image} className="img-fluid mb-3" />
          </td>
          <td className="col-3 text-center">
            <p>
              Product Brand : <span className="price">{brand}</span>
            </p>
            <p>
              {" "}
              <h5> {name}</h5>
            </p>
            <p>
              price : <span className="price">₹{price}</span>
            </p>
            <p>
              Items in Stock : <span className="text-danger">567</span>
            </p>
          </td>
          <td className="col-3 justify-content-around ">
            <button
              className="add-btn mx-2"
              onClick={() => {
                addToCart(id);
              }}
            >
              +
            </button>
            <input
              type="text"
              className="text-center"
              value={cartItems[id]}
              onchange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className="add-btn mx-2"
              onClick={() => {
                removeToCart(id);
              }}
            >
              -
            </button>
          </td>
          <td className="col-3">
            <div className="input-group mb-3">
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
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default Cartitems;
