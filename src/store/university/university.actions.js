import { createActions } from 'redux-arc';

export const { creators, types } = createActions('university', {
  get_university_list: null,
  get_university_list_successful: null,
  get_university_list_failed: null,
});
