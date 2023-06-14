import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const ref = useRef();
  const isMounted = useRef(false); //this serves as a global value keeping track of the boolean

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return; //initial render will not console.log("Rerender")
    }
    console.log("Rerender");
    ref.current.focus();
  }, [value]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={handleChange}
            ref={ref}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
