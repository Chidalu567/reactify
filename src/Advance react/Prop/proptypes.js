import React from "react";
import { useFetch } from "../contextApi/apicall";
import { Product } from "./products";

const Products = () => {
  const url = "https://course-api.com/react-prop-types-example"; //url for the api
  const { products } = useFetch(url); //custom hook call
  console.log(products);
  return (
    <>
      {products.map((product) => {
        const { id, name, price, image } = product; //object destructuring variables
        return <Product key={id} {...product} />;
        {
          /*React component call*/
        }
      })}
    </>
  );
}; //React component definition

export default Products; //export default component
