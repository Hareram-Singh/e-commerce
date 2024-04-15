import React from "react";
import { PRODUCTS, PRODUCTS1 } from "../Component/Products";
import Cartitems from "../Component/Cartitems";
import { ShopContext } from "../Component/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getTotalCartAmount, ClearCart, cartItems, getTotalCartProducts } =
    useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  const totalproducts = getTotalCartProducts();
  return (
    <div>
      {TotalAmount > 0 ? (
        <section className="cart-item p-5">
          <div className="container-xxl">
            <div className="row w-100">
              <table className="my-3">
                <thead className=" ">
                  <th className="col-3 text-center">Product Image</th>
                  <th className="col-3 text-center">Product Details</th>
                  <th className="col-3">Edit</th>
                  <th className="col-3 ">Coupons</th>
                </thead>
              </table>
              {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <Cartitems key={product.id} data={product} />;
                }
              })}

              <div className="mb-3 mt-3 mx-2">
                <Link onClick={() => ClearCart(id)}>Clear Cart</Link>
              </div>
            </div>
          </div>

          <hr className="my-3" />
          <div className="mt-4 p-3 cart-total d-flex justify-content-between">
            <div>
              <Link to={"http://localhost:5173/shop"}>
                <button>Continue Shopping</button>
              </Link>
            </div>
            <div>
              <h4>Total Amount</h4>
              <p>
                Total Products : <span className="price">{totalproducts}</span>
              </p>
              <p className="price mb-3"> ₹{TotalAmount}</p>
              <Link to={'/checkout'}><button>Check Out</button></Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="p-5 mb-8 mt-8">
          <div className="container-xxl">
            <div className="row">
              <div className="text-center">
                <h3>Your Cart Is Empty</h3>
                <p>
                  Click here{" "}
                  <Link to={"http://localhost:5173/shop"}>Add items..</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
