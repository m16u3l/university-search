import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from './root.epics';
import createRootReducer from './root.reducer';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {},
  });

  const middlewares = [
    epicMiddleware,
  ];

  const middlewareEnhancer = applyMiddleware(
    ...middlewares,
  );

  const enhancers = [
    middlewareEnhancer,
  ];

  const composedEnhancers = composeWithDevTools(
    ...enhancers,
  );

  const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers,
  );

  epicMiddleware.run(rootEpic);
  return store;
}
