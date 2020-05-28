import React, { useState } from "react";
import { get } from "lodash";

import "./App.css";

const MyInput = ({ value, defaultValue, onChange }) => {
  const [myValue, setMyValue] = useState(value != null ? value : defaultValue);
  const length = get(myValue, "length");

  return (
    <div>
      <input
        value={myValue}
        onChange={(e) => {
          setMyValue(e.target.value);
          if (onChange) onChange(e);
        }}
      />
      <span>{length}</span>
    </div>
  );
};

const MyContainer = () => {
  const [value, setValue] = useState("");
  const [val2, setVal2] = useState("");
  return (
    <>
      <pre>value: {JSON.stringify(value)}</pre>
      <MyInput value={value} onChange={(e) => setValue(e.target.value)} />
      <pre>val2: {JSON.stringify(val2)}</pre>
      <MyInput defaultValue="hello" onChange={(e) => setVal2(e.target.value)} />
    </>
  );
};

const App = () => (
  <div className="App">
    <MyContainer />
  </div>
);

export default App;
