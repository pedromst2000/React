import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TableProducts from "../components/products/TableProducts";
import useProductsProvider from "../hooks/useProductsProvider";
import AddProduct from "../components/products/AddProduct";
import FilterForm from "../components/products/filter/FilterForm";
import Loading from "../components/Loading";

export default function Products() {
  const { products, dispatch, setProducts } = useProductsProvider();

  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = searchParams.get("search") || "";
  const queryCategory = searchParams.get("category") || "all";

  const [timeLoading, setTimeLoading] = useState(0);

  // for filter form
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setSearchParams({ search: querySearch, category: queryCategory });
  }, [querySearch, queryCategory, setSearchParams]);

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
    <>
      {timeLoading < 2 ? (
        <Loading timeLoading={timeLoading} setTimeLoading={setTimeLoading} />
      ) : (
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
            products={products.filter((product) => {
              if (queryCategory === "all" && querySearch === "") return product;
              if (queryCategory === "all" && querySearch !== "")
                return product.name
                  .toLowerCase()
                  .includes(querySearch.toLowerCase());
              if (queryCategory !== "all" && querySearch === "")
                return product.category === queryCategory;
              if (queryCategory !== "all" && querySearch !== "")
                return (
                  product.category === queryCategory &&
                  product.name.toLowerCase().includes(querySearch.toLowerCase())
                );

              if (category === "all" && search === "") return product;
              if (category === "all" && search !== "")
                return product.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              if (category !== "all" && search === "")
                return product.category === category;

              if (category !== "all" && search !== "")
                return (
                  product.category === category &&
                  product.name.toLowerCase().includes(search.toLowerCase())
                );
            })}
            handleDelete={handleDelete}
            handleChange={handleChange}
            search={search}
            category={category}
          />
          <br />
          <AddProduct handleAddProduct={handleAddProduct} />
        </div>
      )}
    </>
  );
}
