import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    console.log(name, email);
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>User Login</h2>
      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="name"
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="name"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ControlledInputs;
