import React from "react";
import PropTypes from "prop-types";

function Counter({ ...props }) {
  return (
    <div className="counter">
      <button onClick={props.decrement}>-</button>
      <h3>{props.counter}</h3>
      <button onClick={props.increment}>+</button>

      <button
        onClick={() => {
          props.addBy2();
        }}
      >
        Add by 2
      </button>
      <button
        onClick={() => {
          props.reduceBy2();
        }}
      >
        Reduce by 2
      </button>

      <button
        onClick={() => {
          props.multiplyBy2();
        }}
      >
        Multiply by 2
      </button>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  addBy2: PropTypes.func.isRequired,
  reduceBy2: PropTypes.func.isRequired,
  multiplyBy2: PropTypes.func.isRequired,
};

export default Counter;
