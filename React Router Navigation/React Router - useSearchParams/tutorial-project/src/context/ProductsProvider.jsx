import React, { createContext, useEffect, useReducer, useState } from "react";
import productsData from "../data/products.json";

const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const storeProducts = localStorage.getItem("products");

    return JSON.parse(storeProducts) || productsData;
  });

  const productsReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return [...state, action.payload];
      case "DELETE_PRODUCT":
        return state.filter((product) => product.id !== action.payload);
      case "UPDATE_PRODUCT":
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              ...action.payload.product,
            };
          } else {
            return product;
          }
        });

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(productsReducer, products);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state));
  }, [state]);

  return (
    <ProductsContext.Provider value={{ dispatch, products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
