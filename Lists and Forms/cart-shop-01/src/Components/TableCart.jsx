import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

function TableCart({ editProduct, deleteProduct, products }) {
  return (
    <div className="table-cart">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          products.length == 0 ? (
            <tbody>
              <tr>
                <td colSpan="4">empty cart</td>
              </tr>
            </tbody>
          ) : (
            products.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
              />
            ))
          )
        }
      </table>
    </div>
  );
}

TableCart.propTypes = {
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default TableCart;
