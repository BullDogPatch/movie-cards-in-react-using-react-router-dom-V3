import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const routeToMovies = event => {
    history.push("/movie");
  };
  return (
    <div className="home-page">
      <h1>Welcome to some of Craigs favourite Movies</h1>
      <button onClick={routeToMovies}>Movies</button>
    </div>
  );
};

export default HomePage;
