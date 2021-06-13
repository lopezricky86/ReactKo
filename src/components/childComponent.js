import React, { useEffect, useState } from "react";
import { unResolvedBugsSelector } from "../simplestore/bugs";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

function ChildComponent(callBackFunctionKo) {
  const [counter, setCounter] = useState(0);

  console.log("child comp loaded first line ko");
  const bugs = useSelector((state) => state.bugs);

  const handleCallBackFunctionKo = (param) => {
    callBackFunctionKo.callBackFunctionKo(param);
  };

  useEffect(() => {
    console.log({ bugs });
  }, [bugs]);

  return (
    <div>
      <span>Child Component</span>
      <button onClick={() => handleCallBackFunctionKo(50)}>
        HandleCallBackFunction
      </button>

      <br></br>
      <button onClick={() => setCounter((c) => c + 1)}>
        Counter Child {counter}
      </button>
    </div>
  );
}

export default React.memo(ChildComponent);
