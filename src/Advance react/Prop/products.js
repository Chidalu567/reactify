import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.jpg";

export const Product = ({ image, price, name }) => {
  const url = image && image.url;
  return (
    <div className="product_item">
      <figure>
        <img src={url || defaultImage} alt={name} />
        <figcaption>
          <h5 className="product_name">{name}</h5>
          <p className="product_price">{price}$</p>
        </figcaption>
      </figure>
    </div>
  ); //return jsx in React component
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}; //setting a validity for our propTypes

Product.defaultProps = {
  image: defaultImage,
  price: 192,
  name: "Chair products",
};
