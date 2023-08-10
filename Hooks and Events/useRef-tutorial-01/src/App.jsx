import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [storename, setStoreName] = useState(name);
  const countNames = useRef(0);
  // {current: 0}
  const inputRef = useRef();
  const prevName = useRef("");
  const currentName = useRef("");
  
  useEffect(() => {
    // when the compontent is mounted
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreName(name);
    countNames.current++;

    prevName.current = currentName.current;

    currentName.current = name;

    setName("");
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          ref={inputRef}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input type="submit" value="set name" />
          <button
            onClick={handleFocus}
          >Focus</button>
      </form>

      <h1>My name is {storename}</h1>


        <h4>last name inserted: {prevName.current}</h4>
        <h4>current name inserted: {currentName.current}</h4>

      <h4>Names inserted : {countNames.current}</h4>
  
    </div>
  );
}

export default App;
