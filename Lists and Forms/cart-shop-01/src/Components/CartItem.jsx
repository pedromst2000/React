import React from "react";
import PropTypes from "prop-types";

function CartItem({
  id,
  description,
  price,
  quantity,
  editProduct,
  deleteProduct,
}) {
  return (
    <tbody>
      <tr key={id}>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price} €</td>
        <td>
          <button
            onClick={() => {
              editProduct(id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteProduct(id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default CartItem;
