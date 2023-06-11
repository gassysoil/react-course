import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  function Increase() {
    let newCount = count + 1;
    setCount(newCount);
  }

  function Decrease() {
    let newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div>
      <div>The current value is: {count}</div>
      <button className="btn" onClick={Increase}>
        Increase
      </button>
      <button className="btn" onClick={Decrease}>
        Decrease
      </button>
    </div>
  );
};

export default UseStateBasics;
