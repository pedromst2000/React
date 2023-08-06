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

  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(series));
  }, [series]);


  function addSerie(newSerie) {
    //  when adding the cover get the real path of the image and not the fake path
    // give the cover the real path with src/assets/images/
    newSerie.cover = newSerie.cover.replace("C:\\fakepath\\", "src/assets/images/");
    
    setSeries((currentSeries) => {
      return [
        ...currentSeries,
        newSerie
      ]
    })

  }

  function validateSerie(validateTitle, validateGenre, validateCover) {
     
    const validGenres = ["action", "comedy", "drama", "horror"];
    
    // if the title already exists
    if (series.find((serie) => serie.title.toLowerCase() === validateTitle.toLowerCase())) {
      alert("This series already exists");
      return;
    }

    // if the genre is not valid
    else if (!validGenres.includes(validateGenre.toLowerCase())) {
      alert("Please select a genre");
      return;
    }
    // if the cover is empty
    else if (validateCover === "") {
      alert("Please select a cover");
      return;
    }
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

      const genres = ["action", "comedy", "drama", "horror"];

    if (confirmEdit) {
      
      while (true) {
        const genre = prompt(
          `Enter the genre of the serie "${series[id - 1].title}"`
        );
          // if is empty
        if (genre === "" || genre === null) {
          alert("Please enter a genre");
          continue;
        }
        // if is not in the array
        if (!genres.includes(genre.toLowerCase())) {
          alert("Please enter a valid genre");
          continue;
        }
        // if is in the array
        if (genres.includes(genre.toLowerCase())) {
          series[id - 1].genre = genre.toLowerCase();
          setSeries([...series]);
          break;
        }
    } 
    // if it is canceled
    } else {
      return;
    }
  }

  return (
    <div className="app-container">
      <WelcomeMessage
        message="Welcome to the series form"
        info="add your favourite tv series"
      />
      <FormSeries addSerie={addSerie}
      series={series}
      validateSerie={validateSerie}
      />
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
        series={series
          .filter((serie) => {
            if(genreVal != "all"){
              return serie.genre === genreVal;
            }
            if(searchVal != ""){
              return serie.title.toLowerCase().includes(searchVal.toLowerCase());
            }
            return serie;
          })
          }
        searchFilter={searchVal}
        genrerFilter={genreVal}
        removeSerie={removeSerie}
        editSerie={editSerie}
      />
    </div>
  );
}
