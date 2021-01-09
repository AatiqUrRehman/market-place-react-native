import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

// const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleWare(rootReducer, initialState);
// export default store;
