import {APP_INITIAL_STATE} from './appInitialState';

export default function reducer(state, {type, payload = {}}) {
    const actions = {
        RESET_STATE: APP_INITIAL_STATE,
        SET_AUTHENTICATED: {
            authenticated:
                payload.authenticated !== undefined ? payload.authenticated : true,
            authenticating: false,
            error: null,
            name: payload.name,
        },
        SET_AUTHENTICATING: {
            ...APP_INITIAL_STATE,
            authenticating:
                payload.authenticating !== undefined ? payload.authenticating : true,
        },
        SET_ERROR: {
            authenticated: false,
            authenticating: false,
            error: payload.error,
        },
    };

    return {...state, ...actions[type]} || state;
}
