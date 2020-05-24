import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./styles.css";
import Movies from "./components/Movies";
import HomePage from "./components/HomePage";
import { movies } from "./data";

function App() {
  const [data] = useState(movies);
  // console.log(data);
  return (
    <div>
      <nav>
        <h1>Craig's Movies</h1>
        <div className="nav-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/movie" className="link">
            Movies
          </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/movie">
          <Movies movies={data} />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
