import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { sessionReducer } from './session';
import { storiesReducer } from './stories';
import { modalsReducer } from './modals';
import { commentsReducer } from './comments';

const rootReducer = combineReducers({
  session: sessionReducer,
  stories: storiesReducer,
  comments: commentsReducer,
  modals: modalsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  }

  const configureStore = (preloadedState) => {
      return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;