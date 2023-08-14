import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function FormCart({ addProduct, products }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.00);
  const [quantity, setQuantity] = useState(0);
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      id: products.length + 1,
      description: description,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    });

    setDescription("");
    setPrice(0.00);
    setQuantity(0);

    descriptionRef.current.focus();
  };

  return (
    <div className="form-cart">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Description">Description</label>
        <input
          ref={descriptionRef}
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          min="0.01"
          max="1000.00"
          step="0.01"
          name="price"
          placeholder="0.00€"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="Quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          min="1"
          max="100"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}

FormCart.propTypes = {
  addProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default FormCart;
