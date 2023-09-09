import React, { useReducer } from "react";
import useAuthProvider from "../hooks/useAuthProvider";
import useMoviesProvider from "../hooks/useMoviesProvider";
import TableUsers from "../components/manage/TableUsers";
import AddMovieForm from "../components/manage/AddMovieForm";

export default function Manage() {
  const { User, users } = useAuthProvider();
  const { movies } = useMoviesProvider();

  const [formAddMovie, setFormAddMovie] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      diretor: "",
      stars: [],
      rate: 0,
      year: 0,
      genre: "",
      cover: "",
      description: ""
    }
  );

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
          formAddMovie={formAddMovie}
          setFormAddMovie={setFormAddMovie}
        />
        </div>
    </div>
  );
}
