import React, { useState, useReducer } from "react";
import { Modal } from "./modal";

const reducer = (state, action) => {
  // if (action.type === "add-person") {
  //   const newItem = [...state.people, action.payload]; //jvascript ARRAY definition
  //   return {
  //     ...state,
  //     isModal: true,
  //     modalcontent: "User added",
  //     people: newItem,
  //   }; //javascript object definition
  // }
  // if (action.type == "no-name") {
  //   return { ...state, isModal: true, modalcontent: "Enter a value" };
  // }
  switch (action.type) {
    case "add-person":
      const newItem = [...state.people, action.payload]; //javascript array definition
      return {
        ...state,
        isModal: true,
        modalcontent: "user added",
        people: newItem,
      }; //return a new state after getting the old states
    case "no-name":
      return { ...state, isModal: true, modalcontent: "enter a value" };
    case "closemodal":
      return { ...state, isModal: false };
  }
}; //javascript function definition

const defaultState = {
  people: [],
  isModal: true,
  modalcontent: "",
}; //javascript object definition

const useReduceTuto = () => {
  const [name, setName] = useState(""); //useState value and handler
  const [data, dispatch] = useReducer(reducer, defaultState); //useReducer function and state definition

  const closemodal = () => {
    dispatch({ type: "closemodal" }); //ldispatch function call
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default reloading of page
    if (name) {
      const person = { id: new Date().getTime().toString(), name }; //javascript object definition
      dispatch({ type: "add-person", payload: person }); //dispatch finction call
      setName(""); //state handler call
    } else {
      dispatch({ type: "no-name" }); //dispatch function call
    }
  };

  return (
    <>
      {data.isModal && (
        <Modal modalcontent={data.modalcontent} closemodal={closemodal} />
      )}
      {/*short circuit operator in javascript*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="firstName"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {data.people.map((person) => {
        const { id, name } = person; //object destructoring in javascript
        return (
          <div key={id} className="items">
            <h5>{name}</h5>
            <button
              className="rmvb"
              type="button"
              onClick={() => dispatch({ type: "removeItem", payload: id })}
            >
              remove
            </button>
          </div>
        ); //React jsx definition
      })}
    </>
  ); //return react jsx
}; //React component definition

export default useReduceTuto; //export default component
