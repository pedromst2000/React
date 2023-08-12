import { useState, useMemo, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(()=> {

    const localData = localStorage.getItem("count");
    return localData ? JSON.parse(localData) : 0;

  });

  const [dark, setDark] = useState(() => {
    const localTheme = localStorage.getItem("theme");

    return localTheme ? JSON.parse(localTheme) : false;
  });


  const spanRef = useRef();


  // const slowFunction = (theme) => {
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return theme ? "dark" : "light";
  // };


  const slowFunction = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return (theme) => theme ? "dark" : "light";
  }, []);


  useEffect(() => {

    console.log("new count");
    localStorage.setItem("count", JSON.stringify(count));
    
    localStorage.setItem("theme", JSON.stringify(dark));

    spanRef.current.innerHTML = count;

    // clean up function
    
    return () => {
      console.log("clean up");
    }


  }, [count, dark]);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span ref={spanRef}></span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >+</button>

        <div
          style={{
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
          }}
        > 
          Hello World
        </div>
        <button
          onClick={() => {
            slowFunction(setDark(!dark));
          }}
        >
          Toggle Teme
        </button>

    </div>
  );
}

export default App;
