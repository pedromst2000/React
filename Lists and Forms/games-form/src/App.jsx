import { useState, useEffect } from "react";
import Welcome from "./Components/Welcome";
import FormGames from "./Components/FormGames";
import MessageFilter from "./Components/MessageFilter";
import FilterForm from "./Components/FilterForm";
import TableGames from "./Components/TableGames";

function App() {
  const [games, setGames] = useState(() => {
    const defaultData = [
      {
        id: 1,
        game: "The Witcher 3",
        genre: "RPG",
        platform: "PC",
      },
      {
        id: 2,
        game: "The Last of Us",
        genre: "Action",
        platform: "PS4",
      },
      {
        id: 3,
        game: "God of War",
        genre: "Action",
        platform: "PS4",
      },
    ];

    const localData = localStorage.getItem("games");

    return localData ? JSON.parse(localData) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const [filterGenre, setFilterGenre] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");
  const [searchGame, setSearchGame] = useState("");

  const addGame = (game, genre, platform) => {
    return setGames((prevGames) => {
      return [...prevGames, { game, genre, platform }];
    });
  };

  const editGenre = (id) => {
    const confirm = window.confirm(
      `Are you sure you want to edit the genre of the game "${
        games[id - 1].game
      }"?`
    );
    const newGenre = prompt("Enter the new genre");

    const newGames = games.map((game) => {
      if (game.id === id) {
        return { ...game, genre: newGenre };
      }
      return game;
    });

    if (confirm) {
      setGames(newGames);
    }
  };

  const deleteGame = (id) => {
    const newGames = games.filter((game) => game.id !== id);

    const confirmDelete = window.confirm(
      `Are you sure you want to delete the game "${games[id - 1].game}"?`
    );

    if (confirmDelete) {
      setGames(newGames);
    }
  };
  const filterSearch = (game) => {
    if (searchGame === "") {
      return true;
    }

    if (game.game.toLowerCase().includes(searchGame.toLowerCase())) {
      return true;
    }

    return false;
  };

  const filteringGenre = (genre) => {
    if (filterGenre === "select the genre") {
      return true;
    }

    if (genre.genre.toLowerCase().includes(filterGenre.toLowerCase())) {
      return true;
    }

    return false;
  };

  const filteringPlatform = (platform) => {
    if (filterPlatform === "select the platform") {
      return true;
    }

    if (
      platform.platform.toLowerCase().includes(filterPlatform.toLowerCase())
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className="app-container">
      <Welcome message="Welcome to the Games Form" />
      <FormGames addGame={addGame} games={games} />
      <MessageFilter messageFilter="Filtering games by genre or by platform" />
      <FilterForm
        genreFilterVal={filterGenre}
        setGenreFilterVal={setFilterGenre}
        platformFilterVal={filterPlatform}
        setPlatformFilterVal={setFilterPlatform}
        searchGame={searchGame}
        setSearchGame={setSearchGame}
      />
      <TableGames
        games={games
          .filter(filterSearch)
          .filter(filteringGenre)
          .filter(filteringPlatform)}
        editGenre={editGenre}
        deleteGame={deleteGame}
      />
    </div>
  );
}

export default App;
