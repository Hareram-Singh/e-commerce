import React from "react";
import Prod from "./Prod";
import { PRODUCTS, PRODUCTS1 } from "./Products";
const ShopItems = () => {
  return (
    <div>
      <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
