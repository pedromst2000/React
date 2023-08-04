import FilterMessage from "./Components/FilterMessage";
import FilterSeries from "./Components/FilterSeries";
import FormSeries from "./Components/FormSeries";
import TableSeries from "./Components/TableSeries";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState, useEffect } from "react";

export default function App() {
  const [series, setSeries] = useState(() => {
    const moviesData = [
      {
        id: 1,
        title: "The Walking Dead",
        genre: "horror",
        cover: "src/assets/images/The_walking_dead.jpg",
      },
      {
        id: 2,
        title: "Breaking Bad",
        genre: "drama",
        cover: "src/assets/images/the_witcher.jpg",
      },
      {
        id: 3,
        title: "Supernatural",
        genre: "horror",
        cover: "src/assets/images/supernatural.jpg",
      },
      {
        id: 4,
        title: "Friends",
        genre: "comedy",
        cover: "src/assets/images/friends.jpg",
      },
      {
        id: 5,
        title: "The Witcher",
        genre: "action",
        cover: "src/assets/images/the_witcher.jpg",
      },
    ];

    const localData = localStorage.getItem("series");

    return localData ? JSON.parse(localData) : moviesData;
  });

  const [searchVal, setSearchVal] = useState("");
  const [genreVal, setGenreVal] = useState("all");
  const [isFilterSearching, setIsFilterSearching] = useState(false);
  const [isFilterGenrers, setIsFilterGenrers] = useState(false);

  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(series));
  }, [series]);

  function addSerie(newSerie) {
    console.log(newSerie);
  }

  function removeSerie(id) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the serie "${series[id - 1].title}"?`
    );
    const newSeries = series.filter((serie) => serie.id !== id);
    if (confirmDelete) {
      setSeries(newSeries);
    }
  }

  function editSerie(id) {
    const confirmEdit = window.confirm(
      `Are you sure you want to change the genre of the serie "${
        series[id - 1].title
      }"?`
    );
    if (confirmEdit) {
      const newGenre = prompt("Enter the new genre");
      const newSeries = series.map((serie) => {
        if (serie.id === id) {
          serie.genre = newGenre;
        }
        return serie;
      });
      setSeries(newSeries);
    }
  }

  function filteringTitle() {
    
    console.log("is filter title");

    // const filterTilteArray = series.filter((serie) => serie.title.toLowerCase().includes(searchVal.toLowerCase()));

    //   if(filterTilteArray.length > 0) {
    //       return filterTilteArray.map((serie) => (
    //           <tr key={serie.id}>
    //               <td>{serie.title}</td>
    //               <td>{serie.genre}</td>
    //               <td><img src={serie.cover} alt={serie.title} /></td>
    //               <td>
    //                   <button onClick={() => removeSerie(serie.id)}>Delete</button>
    //                   <button onClick={() => editSerie(serie.id)}>Edit</button>
    //               </td>
    //           </tr>
    //       ))
    //   }
    //   else{
    //       return <tr><td colSpan="4">No results found</td></tr>
    //   }
  }

  function filteringGenre() {
    console.log("is filter genre");

    // const filterGenreArray = series.filter((serie) => serie.genre.toLowerCase().includes(genreVal.toLowerCase()));

    // if(filterGenreArray.length > 0) {
    //     return filterGenreArray.map((serie) => (
    //         <tr key={serie.id}>
    //             <td>{serie.title}</td>
    //             <td>{serie.genre}</td>
    //             <td><img src={serie.cover} alt={serie.title} /></td>
    //             <td>
    //                 <button onClick={() => removeSerie(serie.id)}>Delete</button>
    //                 <button onClick={() => editSerie(serie.id)}>Edit</button>
    //             </td>
    //         </tr>
    //     ))
    // }
    // else{
    //     return <tr><td colSpan="4">No results found for the genrer {genre}</td></tr>
    // }
  }

  return (
    <div className="app-container">
      <WelcomeMessage
        message="Welcome to the series form"
        info="add your favourite tv series"
      />
      <FormSeries addSerie={addSerie} />
      <FilterMessage
        messageFilter="Filter your series"
        infoFilter="filter by genre or by title"
      />
      <FilterSeries
        setGenrerVal={setGenreVal}
        setSearchVal={setSearchVal}
        searchVal={searchVal}
        genrerVal={genreVal}
      />
      <TableSeries
        series={series}
        isFilterSearch={isFilterSearching}
        isFilterGenre={isFilterGenrers}
        filterGenre={filteringGenre}
        filterTitle={filteringTitle}
        setFilterGenre={setIsFilterGenrers}
        setFilterTitle={setIsFilterSearching}
        removeSerie={removeSerie}
        editSerie={editSerie}
      />
    </div>
  );
}
