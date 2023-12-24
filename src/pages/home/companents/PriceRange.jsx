import React from "react";

let minPrice = 0;
let maxPrice = 1000;

const PriceRange = () => {
  return <div className="price__range">
    <h2 className="range__title">Price Range</h2>
    <input type="range" className="range__slider"/>
    <p className="range__price">Price: ${minPrice} - ${maxPrice}</p>
  </div>
}

export default PriceRange;
