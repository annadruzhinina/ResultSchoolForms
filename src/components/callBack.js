import { useState } from "react";

// State less
const Counter = ({ value, setValue }) => {
  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>{value}+1</button>
    </>
  );
};

// This is a statefull component
export const CallBack = () => {
  const [value, setValue] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = a + b;

  return (
    <div>
      <label>Qty: {value}</label>
      <Counter value={value} setValue={setValue} />
      <div>A: {a}</div>
      <button onClick={() => setA(a + 1)}>Add 1 to A</button>
      <div>B: {b}</div>
      <button onClick={() => setB(b + 1)}>Add 1 to B</button>
      <div>Sum A+B: {sum}</div>
    </div>
  );
};
