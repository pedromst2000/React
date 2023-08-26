import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "../Components/Loading";

function Movie({ movies }) {
  const { id } = useParams();

  const [validId, setValidId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLoading, setTimeLoading] = React.useState(0);

  const [data, setData] = useState(() => {
    const movie = movies.find((movie) => movie.id === Number(id));

    return movie;
  });

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) {
      setValidId(false);
      setLoading(true);
      return;
    }

    
    setValidId(true);
    setLoading(true);
    setData(movie);

    // cleanup function
    return () => {
      setData({});
    };
  }, [id, movies]);

  const handleView = () => {
    if (validId) {

      return (
        <>
          {

            timeLoading < 1 ? (
              <Loading timeLoading={timeLoading} setTimeLoading={setTimeLoading} />
            ) : (
              <div className="movie-container">
            <div className="movie-cover">
              <img src={data.Cover} alt={data.title} />
            </div>
            <div className="movie-info">
              <div className="movie-title">
                <h2>{data.title}</h2>
              </div>
              <div className="director">
                <h3>Diretor : {data.Director}</h3>
              </div>
              <div className="Stars">
                <h4>
                  Elenco :{" "}
                  {data.Stars.map((star) => (
                    <span key={star.id}>{star.name} </span>
                  ))}
                </h4>
              </div>
              <div className="rate">
                <h4>Nota : {data.Rate}</h4>
              </div>
              <div className="year">
                <h4>Ano : {data.Year}</h4>
              </div>
              <div className="genre">
                <h4>Gênero : {data.Genre}</h4>
              </div>
              <div className="description">
                <p>{data.Description}</p>
              </div>
            </div>
          </div>
              )
        
          }
         
          
        </>
      );
    }

    if (!validId && loading) {
      return (
         <>
          {
            timeLoading < 1 ? (
              <Loading timeLoading={timeLoading} setTimeLoading={setTimeLoading} />
            ) : (
              <NotFound />
            )
          }
         </>
      )
    }
  };

  return <>{handleView()}</>;
}

Movie.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movie;
