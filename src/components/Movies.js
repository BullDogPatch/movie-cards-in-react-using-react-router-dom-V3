import React from "react";
import MovieCard from "./MovieCard";

function Movies(props) {
  console.log(props);
  return (
    <div className="movie-div">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  );
}

export default Movies;
