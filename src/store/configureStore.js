import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

export const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);

    let result = next(action);

    console.log('next state', store.getState());
    console.groupEnd(action.type);

    return result;
}

export default function configureStore() {
    const middleware = applyMiddleware(
        logger,
    );

    const store = createStore(
        reducers,
        middleware,
    );

    return store;
}
