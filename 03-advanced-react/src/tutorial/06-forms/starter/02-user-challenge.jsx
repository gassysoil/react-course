import React, { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");

  function removeUser(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  function submitForm(event) {
    event.preventDefault();
    const nextID = users[users.length - 1].id + 1;
    const newUser = { id: nextID, name: name };
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setName("");
    console.log(newUsers);
  }

  return (
    <div>
      <form className="form" onSubmit={submitForm}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeUser(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
