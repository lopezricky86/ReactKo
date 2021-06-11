import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bugAdded, unResolvedBugsSelector } from "../simplestore/bugs";

function TestStore(props) {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => unResolvedBugsSelector(state.bugs));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    dispatch(bugAdded("Bug1"));
    console.log(bugs);
  }, []);

  return (
    <div>
      <p>Test Store</p>
      <div>{counter}</div>
      <button onClick={() => setCounter((c) => c + 1)}>Test Increment</button>
      <button onClick={() => dispatch(bugAdded(`Bug${counter}`))}>
        Add Bug
      </button>
      <button onClick={() => console.log(bugs)}>print bug console</button>

      <br></br>
      <ul>
        {bugs.map((bug) => (
          <li
            key={bug.id}
          >{`Id: ${bug.id} Description: ${bug.description}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestStore;
