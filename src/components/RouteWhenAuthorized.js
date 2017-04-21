import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const RouteWhenAuthorized = ({
  component: Component,
  isAuthenticated,
  ...rest,
}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location.pathname },
          }}
        />
      )
    )}
  />
);

RouteWhenAuthorized.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export const mapStateToProps = ({
  auth: {
    isAuthenticated,
  },
}) => ({
  isAuthenticated,
});

export default connect(
  mapStateToProps,
)(RouteWhenAuthorized);
