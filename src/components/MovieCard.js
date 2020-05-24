import React from "react";

const MovieCard = props => {
  console.log("props", props);
  // const { title, director, metascore, stars } = props;
  return (
    <div className="movie-card">
      <h1>{props.data.title}</h1>
      <p>Director: {props.data.director}</p>
      <p>Rating: {props.data.metascore}</p>

      <h3>Actors</h3>
      {props.data.stars.map(star => (
        <p key={star}>{star}</p>
      ))}
    </div>
  );
};

export default MovieCard;
