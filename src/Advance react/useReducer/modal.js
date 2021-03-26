import React from "react";
import { useEffect } from "react";

export const Modal = ({ modalcontent, closemodal }) => {
  useEffect(() => {
    setTimeout(() => {
      closemodal(); //javascript function call
    }, 3000);
  });
  return (
    <>
      <h2>{modalcontent}</h2>
    </>
  );
}; //react component definition
