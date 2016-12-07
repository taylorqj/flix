export const initialState = {
    isAuthenticating: false,
    isAuthenticated: false,
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
            return {
                ...state,
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
