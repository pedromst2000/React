import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksLayout from "../pages/Books/BooksLayout";
import MainBooks from "../pages/Books/MainBooks";
import Book from "../pages/Books/Book";
import AddBook from "../pages/Books/AddBook";

export default function BooksRoutes() {
  return (
    <>
        <Routes>
        <Route element={<BooksLayout />}>
        <Route index element={<MainBooks />} />
        <Route path=":id" element={<Book />} />
        <Route path="add" element={<AddBook />} />
        </Route>
        </Routes>

    </>
  );
}
