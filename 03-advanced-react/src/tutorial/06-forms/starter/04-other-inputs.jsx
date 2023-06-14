import React, { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [framework, setFramework] = useState("");

  function handleChange(event) {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  }

  function handleFramework(event) {
    setFramework(event.target.value);
  }

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            checked={isChecked}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            id="framework"
            name="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
