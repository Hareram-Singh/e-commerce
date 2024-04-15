import React from "react";

import ShopItems from "../Component/ShopItems";

const Shop = () => {
  return (
    <div>
      <section className="shop-banner">
        <div className="container-xxl">
          <div className="row  justify-content-center">
            <div className="shop-banner-details text-center d-flex flex-column align-items-center mt-4">
              <h1 className="text-white">
                {" "}
                <span className="text-success">
                  <b>Best</b>
                </span>{" "}
                Products And Accessories <br />
                <span className="text-success">
                  <b>Available</b>
                </span>{" "}
                in Best Price
              </h1>
              <div>
                <p className="text-white fw-2">
                  Make your orders we will deliver..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-products p-5">
        <div className="container-xxl">
          <div className="row">
            <ShopItems />
          </div>
        </div>
      </section>

      <section className="pagination p-3">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
