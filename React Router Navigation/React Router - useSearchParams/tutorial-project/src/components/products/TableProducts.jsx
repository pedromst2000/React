import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

function TableProducts({ ...props }) {
  const [category, setCategory] = useState("");

  return (
    <table border="3">
      <thead>
        <tr>
          <th>product</th>
          <th>category</th>
          <th>actions</th>
        </tr>
      </thead>
      {props.products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            handleDelete={props.handleDelete}
            products={props.products}
            setCategory={setCategory}
            category={category}
            handleChange={props.handleChange}
          />
        );
      })}
    </table>
  );
}

TableProducts.propTypes = {
  products: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default TableProducts;
