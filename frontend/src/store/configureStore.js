import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import errorsReducer from '../reducers/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      errors: errorsReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;
