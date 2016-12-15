import React from 'react';
import './App.css';

import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Miss from 'react-router/Miss';
import MatchWhenAuthorized from './components/MatchWhenAuthorized';

export const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <h2>Flix</h2>

                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
              </div>

              <div className="container">
                  <Match exactly pattern="/" component={Home} />
                  <Match pattern="/login" component={Login} />

                  <MatchWhenAuthorized exactly pattern="/movies" component={Movies} />
                  <MatchWhenAuthorized pattern="/movies/:movieId" component={Movie} />
              </div>
          </div>
      </Router>
  );
};

export default App;
