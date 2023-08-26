import React from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../../data/movies";
import NotFound from "../NotFound";
import Loading from "../../components/Loading";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = React.useState(null);
  const [validId, setvalidId] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [timeloading, setTimeloading] = React.useState(0);

  React.useEffect(() => {
    const movie = data.find((movie) => movie.id === Number(id));

    if (!movie) {
      setvalidId(false);
      setLoading(true);
      return;
    }

    setMovie(movie);
    setvalidId(true);
    setLoading(true);
  }, [id, movie]);

  const handlingView = () => {
    if (validId) {
      return (
        <div className="movie-container">
          <div className="title">
            <h1>{movie?.title}</h1>
          </div>
          <div className="cover">
            <img
              src={movie?.Cover}
              alt={movie?.title}
              width="300"
              height="300"
            />
          </div>
          <div className="year">
            <h4>ano: {movie?.Year}</h4>
          </div>
          <div className="genre">
            <h4>gênero: {movie?.Genre}</h4>
          </div>
          <div className="diretor">
            <h4>diretor: {movie?.Director}</h4>
          </div>
          <div className="stars">
            <h4>
              Elenco: {""}
              {movie?.Stars.map((star) => (
                <span key={star.id}>
                  {star.name}
                  {""}
                  {star.id !== movie.Stars.length && ", "}
                </span>
              ))}
            </h4>
          </div>
          <div className="description">
            <p>sinopse: {movie?.Description}</p>
          </div>
        </div>
      );
    }
    if(loading && !validId){
        return  (
            <>
                <NotFound />
            </>
        )
    }

   
  };

  return <>
    
    {
        timeloading < 1 ? (
            <Loading timeloading={timeloading} setTimeloading={setTimeloading} />
        ) : (
            <>
                {handlingView()}
            </>
        )
}
  
  </>;
}
