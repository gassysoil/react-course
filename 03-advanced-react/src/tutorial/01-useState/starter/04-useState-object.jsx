import { useState } from "react";

const people = [
  {
    name: "Bob",
    age: 24,
    hobby: "Reading books",
  },
  {
    name: "John",
    age: 33,
    hobby: "Play FIFA",
  },
];

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Bob",
    age: 24,
    hobby: "Reading books",
  });
  const [toggle, setToggle] = useState(true);

  function showJohn() {
    setPerson(people[1]);
    setToggle(!toggle);
  }

  function showBob() {
    setPerson(people[0]);
    setToggle(!toggle);
  }

  return (
    <div>
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
      <h2>Hobby: {person.hobby}</h2>
      {toggle && <button onClick={showJohn}>Show John</button>}
      {!toggle && <button onClick={showBob}>Show Bob</button>}
    </div>
  );
};

export default UseStateObject;
