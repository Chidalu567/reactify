import React, { useEffect, useState } from "react";
import { useFetch } from "./apicall";

const Customhook = () => {
  //React component definition
  const url = "https://course-api.com/javascript-store-products"; //javascript definition
  const { products } = useFetch(url); //custom hook defintion
  console.log(products); //console log the products
  return (
    <>
      <h2>Custom hook in react</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Company</th>
        </tr>
        {products.map((item) => {
          const { id, fields } = item; //destructuring of an object
          return (
            <tr key={id}>
              <td>{fields.name}</td>
              <td>{fields.price}</td>
              <td>{fields.company}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}; //React component definition

export default Customhook; //export default custom hook
