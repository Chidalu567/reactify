import React from "react";
import { useState, useRef } from "react";

/*The useRef hook is mostly called uncontrolled form handling*/

const UseRefBasic = () => {
  const refcont = useRef(null); //create a useRef object inside a React component

  const handleSubmit = (e) => {
    e.preventDefault(); //stop page from reloding so that we can j=get the data an every submition
    console.log(refcont.current.value);
  };
  //javascript function definition

  return (
    <>
      <label htmlFor="firstname">Firstname: </label>
      <input type="text" id="firstname" ref={refcont} />
      <button type="button" value="add Person" onClick={handleSubmit}>
        add Person
      </button>
    </>
  ); //return React jsx
}; //REact component definition

export default UseRefBasic; //javascript default export
