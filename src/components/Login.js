import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Redirect from 'react-router/Redirect';
import jwtDecode from 'jwt-decode';

export class Login extends Component {
    static propTypes = {
        authRequest: PropTypes.func.isRequired,
        authRequestSuccess: PropTypes.func.isRequired,
        authRequestFailure: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
    };

    state = {
        email: '',
        password: '',
    };

    handleUsernameChange = event => {
        this.setState({ email: event.target.value });

        event.preventDefault();
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });

        event.preventDefault();
    }

    handleSubmit = event => {
        const {
            authRequest,
            authRequestSuccess,
            authRequestFailure,
        } = this.props;

        authRequest();

        axios.post('http://localhost:3001/login', {
            email: this.state.email,
            password: this.state.password,
        })
            .then(res => {
                authRequestSuccess(res.data.token);
            })
            .catch(e => {
                authRequestFailure(e);
            })

        event.preventDefault();
    }

    render() {
        const {
            isAuthenticated,
        } = this.props;

        if (isAuthenticated) {
            return <Redirect to={{ pathname: '/' }} />
        }

        return (
            <div>
                Login

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleUsernameChange} />

                    <label>Password</label>
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export function mapStateToProps({ auth: { isAuthenticated } }) {
    return { isAuthenticated };
}

export function mapDispatchToProps(dispatch) {
    return {
        authRequest: data => dispatch({ type: 'AUTH_REQUEST' }),

        authRequestSuccess: data => {
            window.localStorage.setItem('token', data);

            const decoded = jwtDecode(data);

            dispatch({
                type: 'AUTH_REQUEST_SUCCESS',
                payload: decoded,
            });
        },

        authRequestFailure: data => {
            window.localStorage.removeItem('token');

            dispatch({
                type: 'AUTH_REQUEST_FAILURE',
                payload: data,
            });
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
