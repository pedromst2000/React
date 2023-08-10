import { useState, useRef } from "react";

function App() {
  const [color, setColor] = useState("");
  const [visible, setVisible] = useState(false);

  const inputRef = useRef();

  return (
    <div className="app-container">
      <div
        className="Square"
        style={{
          backgroundColor: color,
          display: visible ? "none" : "block",
        }}
      ></div>
      <div className="form">
        <form>
          <input
            type="text"
            ref={inputRef}
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="set a color"
          />
          <input type="submit" value="change color"
          onClick={(e) => {
            e.preventDefault();
            setColor(inputRef.current.value);
          }}
          />
          <input type="submit" value="change visible" />
        </form>
      </div>
    </div>
  );
}

export default App;
