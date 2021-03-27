import React, { useContext, useState, useReducer } from "react";
/*We normally use the context api in other to avoid propdrilling in our components*/

const reducer = (state, action) => {
  switch (action.type) {
    case "add-item":
      const person = [...state.people, action.payload]; //javascript array definition
      return {
        ...state,
        people: person,
        isModal: true,
        modalcontent: "added item",
      }; //javascript object definition
  }
}; //javascript function definition

const defaultState = {
  people: [],
  isModal: false,
  modalcontent: "",
}; //javascript object definition

const FormContext = React.createContext(); //create context api using React.createContext

const Forms = () => {
  const [name, setName] = useState(""); //useState value and handler definition
  const [price, setPrice] = useState(""); //useState value and handler definition
  const [datas, dispatch] = useReducer(reducer, defaultState); //useReducer function and state definiion

  const handleSubmit = (e) => {
    e.preventDefault(); //set prevent default state
    if (name && price) {
      const newItem = { id: new Date().getTime().toString(), name, price }; //javascript objecrt definition
      dispatch({ type: "add-item", payload: newItem }); //call the dispatch function
      setName(""); //clear the field of name
      setPrice(""); //clear the field of price
      console.log(datas);
    }
  };

  return (
    <FormContext.Provider value={{ datas }}>
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">FirstName: </label>
          <input
            type="text"
            value={name}
            id="firstName"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            value={price}
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" className="btn">
            add Item
          </button>
        </form>
        <HandleData />
        {/*React component call */}
      </>
    </FormContext.Provider>
  );
}; //React component definition

const HandleData = () => {
  const { datas } = useContext(FormContext); //useContext api
  return (
    <>
      <div className="items">
        <h5>UserName</h5>
        <h6>Price</h6>
        {datas.people.map((person) => {
          const { id, name, price } = person; //object destructuring
          return (
            <div key={id}>
              <h5>{name}</h5>
              <h6>{price}$</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}; //React component definition

const ECommerce = () => {
  return (
    <>
      <h2>Context Api tutorial</h2>
      <Forms />
    </>
  );
}; //React component definition

export default ECommerce; //javascript default export
