import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]); //state value and handler definition

  const getProducts = async () => {
    const raw_datas = await fetch(url); //fetch the url
    const refined_data = await raw_datas.json(); //convert the data to json format

    setProducts(refined_data); //state handler call
  }; //javascript function definition

  useEffect(() => {
    getProducts(); //javascript function call
  }, []); //useEffect hook definition
  return { products };
}; //javasctipt function definition (custom hooks)
