import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import Navbar from "./Components/Navbar";
import batmanCover from "./assets/images/batman.jpg";
import inceptionCover from "./assets/images/inception.jpg";
import oPadrinhoCover from "./assets/images/O_padrinho.jpg";
import silencioCover from "./assets/images/silencio.jpg";
 
function App() {


  const [movies, setMovies] = useState(() => {
    const data = [
      {
        id: 1,
        title: "O Padrinho",
        Director: "Frank Darabont",
        Stars: [
          {
            id: 1,
            name: "Mario Brando",
          },
          {
            id: 2,
            name: "Al Pacino",
          },
          {
            id: 3,
            name: "James Caan",
          },
        ],
        Rate: 9.3,
        Year: 1972,
        Genre: "Drama",
        Cover: oPadrinhoCover,
        Description:
          "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      },
      {
        id: 2,
        title: "O Cavaleiro das Trevas",
        Director: "Christopher Nolan",
        Stars: [
          {
            id: 1,
            name: "Christian Bale",
          },
          {
            id: 2,
            name: "Heath Ledger",
          },
          {
            id: 3,
            name: "Aaron Eckhart",
          },
        ],
        Rate: 9.0,
        Year: 2008,
        Genre: "Ação",
        Cover: batmanCover,
        Description:
          "Batman, Gordon and Harvey Dent are forced to deal with the chaos unleashed by an anarchist mastermind known only as the Joker, as it drives each of them to their limits.",
      },
      {
        id: 3,
        title: "A Lista de Schindler",
        Director: "Steven Spielberg",
        Stars: [
          {
            id: 1,
            name: "Liam Neeson",
          },
          {
            id: 2,
            name: "Ralph Fiennes",
          },
          {
            id: 3,
            name: "Ben Kingsley",
          },
        ],
        Rate: 8.9,
        Year: 1993,
        Genre: "Drama",
        Cover: silencioCover,
        Description:
          "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      },
      {
        id: 4,
        title: "A Origem",
        Director: "Christopher Nolan",
        Stars: [
          {
            id: 1,
            name: "Leonardo DiCaprio",
          },
          {
            id: 2,
            name: "Joseph Gordon-Levitt",
          },
          {
            id: 3,
            name: "Elliot Page",
          },
        ],
        Rate: 8.8,
        Year: 2010,
        Genre: "Ação",
        Cover: inceptionCover,
        Description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      },
    ];

    const localData = localStorage.getItem("movies");

    return localData ? JSON.parse(localData) : data;
  });


  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    
    setMovies(movies);
  
  }, [movies]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<Movie movies={movies} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
