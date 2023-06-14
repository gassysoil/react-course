import React, { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle && <AnotherComponent></AnotherComponent>}
      <buton className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </buton>
    </div>
  );
};

const AnotherComponent = () => {
  return <div>Another Component</div>;
};

export default CleanupFunction;
