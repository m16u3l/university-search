import { combineReducers } from 'redux';

import university from './university/university.reducer';

const appReducer = () => combineReducers({
  university,
});

const createRootReducer = (history) => (state, action) => {
  return appReducer(history)(state, action);
};

export default createRootReducer;
