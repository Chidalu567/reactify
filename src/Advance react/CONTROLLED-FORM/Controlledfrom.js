import React from "react";
import { useState } from "react";

const CtrlForm = () => {
  //React component definition
  const [firstname, setFirstname] = useState(""); //useState value and handler definition
  const [email, setEmail] = useState(""); //useSTate value and handler definition
  const [people, setPeople] = useState([]); //useState value and handler definition

  const removeItem = (param) => {
    setPeople((person) => {
      let newPerson = person.filter((p) => p.id !== param); //FIlter an array a value
      return newPerson;
    });
  }; //javascript function definition

  const submitHandler = (e) => {
    e.preventDefault(); //prevent the default page from loading during form rendering so that we can be able to see the data
    if (firstname && email) {
      console.log(people);
      setPeople((person) => {
        let newpeople = {
          id: new Date().getTime().toString(),
          firstname,
          email,
        }; //javascript object definition
        return [...person, newpeople]; //Embedding new objects into the list
      }); //function state handler'
      setFirstname(""); //set the value of fistname and email to default after submition
      setEmail(""); //set the value of fistname and email to default after submition
    } //javascript conditionals

    console.log("Working fine");
  }; //javascript function definition

  return (
    <>
      <form>
        <div>
          <label htmlFor="Firstname">Firstname: </label>
          <input
            type="text"
            id="Firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email: </label>
          <input
            type="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            value="add Person"
            class="btn"
            onClick={submitHandler}
          >
            Add Person
          </button>
        </div>
      </form>
      {people.map((person) => {
        const { id, firstname, email } = person; //Array object destructuring

        return (
          <div key={id}>
            <h3>{firstname}</h3>
            <h5>{email}</h5>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
    </>
  ); //React jsx
}; //React component definition

export default CtrlForm; //Default react export
