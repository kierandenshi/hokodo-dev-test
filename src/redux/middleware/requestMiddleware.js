import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';
import { baseURL } from '@config/api';

/**
 * Check if action has correct structure in payload required for middleware
 * @param {object} action redux action
 * @returns {boolean} if action structure is correct
 */
const hasRequest = action =>
  action.payload && action.payload.request && action.payload.request.url;

/**
 * Perform API request
 * @param {object} store redux store
 * @param {function} next next middleware func
 * @param {object} action redux action
 * @returns {void}
 */
const handleRequest = (store, next, action) => {
  // dispatch original action type to reducer before attempting request
  next({ type: action.type });

  const {
    payload: { request, passthrough },
  } = action;

  const { url, auth, headers, ...rest } = request;

  const dispatchSuccess = payload =>
    store.dispatch({
      type: `${action.type}_SUCCESS`,
      payload: { ...payload, passthrough },
    });

  const dispatchFailure = ({ response }) =>
    store.dispatch({ type: `${action.type}_FAILURE`, payload: response });

  const createRequest = (additionalHeaders = {}) =>
    ajax({
      url: url.match('http') ? url : `${baseURL}/${url}`,
      type: 'json',
      headers: {
        'Content-Type': 'application/json',
        ...additionalHeaders,
      },
      ...rest,
    }).pipe(pluck('response'));

  createRequest(headers).subscribe(dispatchSuccess, dispatchFailure);
};

/**
 * If action has correct signature, perform API request.
 * Dispatch success or error actions
 * @param {object} store redux store
 * @returns {Function} middleware
 */
const requestMiddleware = store => next => action =>
  hasRequest(action) ? handleRequest(store, next, action) : next(action);

export default requestMiddleware;
