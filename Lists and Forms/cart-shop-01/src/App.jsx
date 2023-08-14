import { useState, useEffect} from "react";
import FormCart from "./Components/FormCart";
import TableCart from "./Components/TableCart";
import OverviewCart from "./Components/OverviewCart";

function App() {
  const [products, setProducts] = useState(() => {
    const localProducts = [
      {
        id: 1,
        description: "Apple",
        price: 0.9,
        quantity: 1,
      },
      {
        id: 2,
        description: "Orange",
        price: 0.79,
        quantity: 1,
      },
    ];

    const localData = localStorage.getItem("products");

    return localData ? JSON.parse(localData) : localProducts;
  });

  
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);


  function addProduct(product) {
    return setProducts((prevProducts) => {
      return [...prevProducts, product];
    });
  }

  function editProduct(id) {
    // change the quantity of the product with the id passed as parameter and update the price of the product

    const confirm = window.confirm(
      `Are you sure you want to change the quantity of the product "${
        products[id - 1].description
      }"?`
    );

    if (confirm) {
      const quantity = parseInt(
        prompt(
          `Enter the new quantity of the product "${
            products[id - 1].description
          }":`,
          products[id - 1].quantity
        )
      );

      if (quantity) {
        setProducts((prevProducts) => {
          const newProducts = [...prevProducts];

          newProducts[id - 1].quantity = quantity;

          return newProducts;
        });
      }
    }
    return;
  }

  function deleteProduct(id) {
    const confirm = window.confirm(
      `Are you sure you want to delete the product "${
        products[id - 1].description
      }"?`
    );

    if (confirm) {
      setProducts((prevProducts) => {
        const newProducts = [...prevProducts];

        // delete the product with the id passed as parameter
        newProducts.splice(id - 1, 1);

        return newProducts;
      });
    }
  };

  function calculateTotal() {
    let total = 0;

    products.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total.toFixed(2);
  }

  function calculateQuantity() {
    let quantity = 0;

    products.forEach((product) => {
      quantity += product.quantity;
    });

    return quantity;
  }

  function payTotal(){

    if(products.length == 0) return alert ("You have no products in your cart!");

    const confirm = window.confirm(
      `Are you sure you want to pay the total amount of ${calculateTotal()} €?`
    );

    if (confirm) {
      setProducts([])
    }

  }

  return (
    <div className="app-container">
      <FormCart addProduct={addProduct} products={products} />
      <TableCart
        products={products}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
      <OverviewCart products={products}
      totalQuantity_={calculateQuantity()}
      totalPrice_={parseFloat(calculateTotal())} 
      payTotal={payTotal}
/>
    </div>
  );
}

export default App;
