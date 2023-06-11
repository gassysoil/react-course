import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount((newCount) => {
      console.log(newCount);
      return newCount + 1;
    });
  }

  // function Increase() {
  //   setTimeout(() => {
  //     console.log("Cliked");
  //     setCount((count) => {
  //       return count + 1;
  //     });
  //   }, 3000);
  // }

  return (
    <div>
      <div>The current value is: {count}</div>
      <button className="btn" onClick={Increase}>
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
