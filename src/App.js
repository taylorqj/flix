import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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

export class App extends Component {
    static propTypes = {
        authRequest: PropTypes.func.isRequired,
        authRequestSuccess: PropTypes.func.isRequired,
        authRequestFailure: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
    };

    componentWillMount() {
        const {
            authRequest,
            authRequestSuccess,
            authRequestFailure,
        } = this.props;

        const token = window.localStorage.getItem('token');

        if (!token) {
            return;
        }

        authRequest();

        axios.post('http://localhost:3001/verify', token)
            .then(response => {
                authRequestSuccess();
            })
            .catch(e => (
                authRequestFailure(e)
            ));
    }

    render() {
        const {
            isAuthenticated,
        } = this.props;

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

                        {isAuthenticated && (
                            <div>
                                <MatchWhenAuthorized exactly pattern="/movies" component={Movies} />
                                <MatchWhenAuthorized exactly pattern="/movies/:movieId" component={Movie} />
                            </div>
                            
                        )}
                    </div>
                </div>
            </Router>
        );
    }
}

export function mapStateToProps({ auth: { isAuthenticated } }) {
    return {
        isAuthenticated,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        authRequest: () => dispatch({
            type: 'AUTH_REQUEST',
        }),
        authRequestSuccess: () => dispatch({
            type: 'AUTH_REQUEST_SUCCESS',
        }),
        authRequestFailure: () => dispatch({
            type: 'AUTH_REQUEST_FAILURE',
        }),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
