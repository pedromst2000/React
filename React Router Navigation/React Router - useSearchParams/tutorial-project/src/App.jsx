import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import IsLogged from "./components/IsLogged";
import { AuthProvider } from "./context/AuthProvider";
import { ProductsProvider } from "./context/ProductsProvider";

function App() {
 

  return (
    <>
      <AuthProvider>
        <ProductsProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            {/* private route */}
            <Route element={<IsLogged />}>
            <Route path="/products" element={<Products />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ProductsProvider>
 </AuthProvider>
    </>
  );
}

export default App;
