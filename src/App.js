import React, { PropTypes } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

import RouteWhenAuthorized from './components/RouteWhenAuthorized';

const App = ({
  firstName,
  lastName,
  isAuthenticated,
}) => (
  <Router>
    <div className="App">
      <div className="App-header">
        <h2>Flix</h2>

        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>

        {isAuthenticated && (
          <p>Hello, { firstName } { lastName }!</p>
        )}
      </div>

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          <RouteWhenAuthorized exact path="/movies" component={Movies} />
          <RouteWhenAuthorized exact path="/movies/:movieId" component={Movie} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  </Router>
  );

App.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
};

export function mapStateToProps({
  auth: {
    isAuthenticated,
    user: {
      firstName,
      lastName,
    },
  },
}) {
  return {
    firstName,
    lastName,
    isAuthenticated,
  };
}

export default connect(mapStateToProps)(App);
