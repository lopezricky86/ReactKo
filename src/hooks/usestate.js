import React, { useEffect, useState, useLayoutEffect } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [counter]);

  useLayoutEffect(() => {
    console.log("LayoutEffect");
  }, [counter]);

  return (
    <div>
      Hellow useState
      <span>{counter}</span>
      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default UseState;
