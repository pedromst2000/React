import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function OverviewCart({ totalQuantity_, totalPrice_, payTotal }) {
  const totalPrice = useRef();
  const totalQuantity = useRef();

  useEffect(() => {
    totalQuantity.current.innerHTML = totalQuantity_;
    totalPrice.current.innerHTML = totalPrice_ + " €";
  }, [totalQuantity_, totalPrice_]);

  return (
    <div className="overview-cart">
      <div className="header-cart">
        <h3>Payment</h3>
      </div>
      <div className="overview-values">
        <div className="quantity">
          Total Quantity:
          <p
            ref={totalQuantity}
            style={{
              fontWeight: "bold",
            }}
          ></p>
        </div>
        <div className="price">
          Total Price:
          <p
            ref={totalPrice}
            style={{
              fontWeight: "bold",
            }}
          ></p>
        </div>
      </div>
      <button
        onClick={() => {
          payTotal();
        }}
      >
        Pay
      </button>
    </div>
  );
}

OverviewCart.propTypes = {
  totalQuantity_: PropTypes.number.isRequired,
  totalPrice_: PropTypes.number.isRequired,
  payTotal: PropTypes.func.isRequired,
};

export default OverviewCart;
