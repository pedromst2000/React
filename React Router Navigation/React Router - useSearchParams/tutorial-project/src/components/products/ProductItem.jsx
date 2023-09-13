import React from "react";
import PropTypes from "prop-types";

function ProductItem({ ...props }) {


  return (
    <tbody>
      <tr>
        <td>{props.product.name}</td>
        <td>{
          props.product.category }</td>
        <td>
          <button
            className="delete-product"
            onClick={() => props.handleDelete(props.product.id)}
          >
            Delete
          </button>
          <select
            name="category"
            onChange={(e) => props.handleChange(props.product.id, e.target.value)}
          >
            <option value="edit category">change category</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Fitness">Fitness</option>
            <option value="Appliances">Appliances</option>
            <option value="Footwear">Footwear</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Toys">Toys</option>
            <option value="Food">Food</option>
          </select>
        </td>
      </tr>
    </tbody>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProductItem;
