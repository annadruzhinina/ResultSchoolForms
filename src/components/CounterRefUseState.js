import React, { useState, useRef } from "react";

const CounterRefUseState = () => {
  const useRefCounter = useRef(0);
  const [useStateCounter, setUseStateCounter] = useState(0);

  const incrementRefCounter = () => {
    useRefCounter.current = useRefCounter.current + 1;
    console.log("refCounter: ", useRefCounter.current);
  };

  const incrementUseStateCounter = () => {
    setUseStateCounter(useStateCounter + 1);
    console.log("setUseStateCounter: ", setUseStateCounter + 1);
  };
  return (
    <>
      <div>CounterRefUseState</div>
      <p>useRefCounter: {useRefCounter.current}</p>
      <button onClick={incrementRefCounter}>Increment refCounter</button>
      <p>useRefCounter: {useStateCounter}</p>
      <button onClick={incrementUseStateCounter}>
        Increment useStateCounter
      </button>
    </>
  );
};

export default CounterRefUseState;
