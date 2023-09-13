import React, { useState } from "react";
import PropTypes from "prop-types";

function AddProduct({handleAddProduct}) {
  
    const [product, setProduct] = useState('');
    const [category, setCategory] = useState('');

    return (
    <form>
      <h4>Add Product</h4>

      <input 
        onChange={(e) => setProduct(e.target.value)}
      type="text" name="product" placeholder="product" />
      <select name="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Select a category">Select a category</option>
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

        <button 
        onClick={(e) => {
            e.preventDefault();
            handleAddProduct(product, category);
        }}
        type="submit">Add Product</button>

    </form>
  );
}

AddProduct.propTypes = {
    handleAddProduct: PropTypes.func.isRequired,
};

export default AddProduct;
