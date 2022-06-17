import { createReducers } from 'redux-arc';
import { types } from './university.actions';

const INITIAL_STATE = {
  universitiy_list: [],
  loading: false,
  loaded: false,
  error: false,
};

const onGetUniversityList = (state) => {
  return {
    ...state,
    loading: true,
  }
}

const onGetUniversityListSuccessful = (state, action) => {
debugger
  return {
    ...state,
    universitiy_list: action.payload.data,
    loading: false,
    loaded: true,
  }
}


const onGetUniversityListFailed = (state) => ({
  ...state,
  error: true,
});

const HANDLERS = {
  [types.GET_UNIVERSITY_LIST]: onGetUniversityList,
  [types.GET_UNIVERSITY_LIST_SUCCESSFUL]: onGetUniversityListSuccessful,
  [types.GET_UNIVERSITY_LIST_FAILED]: onGetUniversityListFailed,
};

export default createReducers(INITIAL_STATE, HANDLERS);
