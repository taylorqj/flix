import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';
import PageNotFound from './components/PageNotFound';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Miss from 'react-router/Miss';

export const App = ({
    isAuthenticated,
}) => {
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
                    <Match exactly pattern="/movies" component={Movies} />
                    <Match pattern="/movies/:movieId" component={Movie} />

                    <Miss component={PageNotFound} />
                </div>
            </div>
        </Router>
    );
};

export const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
    isAuthenticated,
});

export default connect(mapStateToProps)(App);
