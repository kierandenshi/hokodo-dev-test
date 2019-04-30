import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { isDev } from '@config/environment';

import requestMiddleware from './middleware/requestMiddleware';

import books from './modules/books';

const rootReducer = combineReducers({
  books,
});

const enableHMR = store => {
  if (isDev() && module.hot) {
    module.hot.accept('./index', () => {
      store.replaceReducer(rootReducer);
    });
  }
};

export default () => {
  const composeEnhancers = isDev() ? composeWithDevTools({}) : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(requestMiddleware)),
  );

  enableHMR(store);

  return { store };
};
