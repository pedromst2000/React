import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const [blue, setBlue] = useState(true);

  const [red, setRed] = useState(false);

  useEffect(() => {

        // if the counter has changed
        if (count > 0) {
          alert(`counter has changed to ${count}`);
        }
        // if the name has changed
        if (name !== "" && count > 0) {
          alert(`name has changed to ${name}`);
        }

  }  , [count, name, blue, red]);  

  return (
    <div className="container">
      <button onClick={
        () => { 
          setCount(count-1);
        }

      }>-</button>
      <span>{count}</span>
      <button onClick={
        () => {
          setCount(count+1);
        }

      }>+</button>

      <form>
        <input type="text" name="name" placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }
        }
        ></input>
        <h3>My name is {name} and i have {count} years old</h3>
      </form>

        <div style={
          {
            backgroundColor: blue ? "blue" : "red"
          }
        } className="background"></div>
        <button onClick={
          () => {
            setBlue(!blue);
            setRed(!red);
          }
        }>
          change background
        </button>

      </div>


)

}

export default App;