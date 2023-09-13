import React, { useEffect, useState } from "react";
import TableProducts from "../components/products/TableProducts";
import useProductsProvider from "../hooks/useProductsProvider";
import AddProduct from "../components/products/AddProduct";
import FilterForm from "../components/products/filter/FilterForm";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const { products, dispatch, setProducts } = useProductsProvider();

  // for filter form
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isQuerySearch, setIsQuerySearch] = useState(false);
  const [isQueryCategory, setIsQueryCategory] = useState(false);

  const querySearch = searchParams.get("search") || "";
  const queryCategory = searchParams.get("category") || "all";


  useEffect(() => {
    
    if (querySearch !== "") {
      setIsQuerySearch(true);
      setSearch(querySearch);
    } else {
      setIsQuerySearch(false);
      setSearch("");
    }

    if (queryCategory !== "all") {
      setIsQueryCategory(true);
      setCategory(queryCategory);
    } else {
      setIsQueryCategory(false);
      setCategory("all");
    }


  }, [search, category, setSearchParams, isQuerySearch, isQueryCategory]);


  const filterProducts = (search, category, isQuerySearch, isQueryCategory) => {
    return products.filter((product) => {
      if (isQuerySearch && isQueryCategory) {
        return (
          product.name.toLowerCase().includes(search.toLowerCase()) &&
          product.category === category
        );
      } else if (isQuerySearch) {
        return product.name.toLowerCase().includes(search.toLowerCase());
      } else if (isQueryCategory) {
        return product.category === category;
      } else {
        return true; // No filters applied
      }
    });
  };



  const handleAddProduct = (...product) => {
    const [name, category] = product;

    if (name == "" && category == "") {
      return alert("Please enter a name and category");
    }

    if (
      products.some(
        (product) => product.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert("Product already exists");
    } else if (category == "") {
      return alert("Please select a category");
    } else {
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          id: products.length + 1,
          name: name,
          category: category,
        },
      });

      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: name,
          category: category,
        },
      ]);
    }

    alert("Product added successfully");
  };

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirm) return;

    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });

    setProducts(products.filter((product) => product.id !== id));
  };

  const handleChange = (id, category) => {
    if (category === "edit category") return alert("Please select a category");

    dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        id,
        product: {
          category,
        },
      },
    });

    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            category,
          };
        } else {
          return product;
        }
      })
    );

    alert("Category updated successfully");
  };

  return (
    <div className="products-container">
      <FilterForm
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <br />
      <br />
      <TableProducts
        products={
          filterProducts(
            isQuerySearch ? querySearch : search,
            isQueryCategory ? queryCategory : category,
            isQuerySearch,
            isQueryCategory
          ) || products
        }
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <br />
      <AddProduct handleAddProduct={handleAddProduct} />
    </div>
  );
}
