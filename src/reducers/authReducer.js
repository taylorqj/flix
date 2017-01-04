export const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  user: {
    firstName: null,
    lastName: null,
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      return {
        ...state,
        isAuthenticating: true,
        isAuthenticated: false,
      };
    }

    case 'AUTH_REQUEST_SUCCESS': {
      const { payload } = action;

      return {
        ...state,
        user: {
          ...state.user,
          firstName: payload.user.firstName,
          lastName: payload.user.lastName,
        },
        isAuthenticating: false,
        isAuthenticated: true,
      };
    }

    case 'AUTH_REQUEST_FAILURE': {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
}
