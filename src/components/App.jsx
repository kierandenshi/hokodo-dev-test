import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '@redux';
import { fetchBooks } from '@redux/modules/books';

import ErrorBoundary from '@components/ErrorBoundary';
import NotFound from '@components/NotFound';
import BookList from '@components/BookList';
import BookDetail from '@components/BookDetail';

const { store } = createStore();

store.dispatch(fetchBooks());

const App = () => (
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/:id" component={BookDetail} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </Router>
  </Provider>
);

export default App;
