import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  function onClickRemove(id) {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => onClickRemove(id)}>Remove</button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
