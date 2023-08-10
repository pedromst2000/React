import { useEffect, useRef, useState } from "react";

function App() {

  const spanRef = useRef();
  const prevNum = useRef(0);
  const currentNum = useRef(0);

  const [count, setCount] = useState(()=> {
    const localCount = localStorage.getItem("count");

    return localCount ? JSON.parse(localCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    spanRef.current.innerHTML = count;
  }, [count]);


  const handleIncrement = () => {
  
    prevNum.current = currentNum.current;
    currentNum.current = count;
    setCount(count + 1);
  };

  const handleDecrement = () => {
    
    prevNum.current = currentNum.current;
    currentNum.current = count;
    setCount(count - 1);
  
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span ref={spanRef}></span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
