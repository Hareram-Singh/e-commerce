import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import ShopContext from "./Component/ShopContext";
import Details from "./pages/Details";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div>
      <ShopContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="details" element={<Details/>}/>
              <Route path="forgotpassword" element={<ForgotPassword/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="checkout" element={<Checkout/>}/>


              
            </Route>
            
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </div>
  );
};

export default App;
