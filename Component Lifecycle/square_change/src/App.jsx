import { useState, useEffect, useRef } from "react";
import Square from "./Components/Square";
import ChangeSquare from "./Components/ChangeSquare";

function App() {
  const [color, setColor] = useState("");
  const [visible, setVisible] = useState(true);
  const prevColorRef = useRef("");
  const prevVisibleRef = useRef(true);


  const handleChangeColor = (e) => {
    e.preventDefault();
    prevColorRef.current = color;
    setColor("");  
  };

  const handleVisible = () => {
    prevVisibleRef.current = visible;
    setVisible(!prevVisibleRef.current);
  };

  return (
    <div className="app-container">
      <Square color={color} visible={visible} 
        prevColorRef={prevColorRef} prevVisibleRef={prevVisibleRef}
      />
      <ChangeSquare 
        color={color}
        setColor={setColor}
        visible={visible}
        prevColorRef={prevColorRef}
        changeColor={handleChangeColor}
        handleVisible={handleVisible}
      />
    </div>
  );
}

export default App;
