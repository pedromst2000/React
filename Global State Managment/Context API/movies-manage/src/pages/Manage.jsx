import React, { useEffect, useReducer, useRef } from "react";
import useAuthProvider from "../hooks/useAuthProvider";
import useMoviesProvider from "../hooks/useMoviesProvider";
import TableUsers from "../components/manage/TableUsers";
import AddMovieForm from "../components/manage/AddMovieForm";

export default function Manage() {
  const { User, users } = useAuthProvider();
  const { movies, addMovie } = useMoviesProvider();

  return (
    <div className="manage-container">
      <div className="manage-users-container">
        <h3>Manage Users</h3>
        <TableUsers key={User.id} users={users} />
      </div>
      <br />
      <hr />
      <div className="manage-movies-container">
        <h3>Add Movie to the catalog</h3>

        <AddMovieForm
          movies={movies}
          addMovie={addMovie}
        />
      </div>
    </div>
  );
}
