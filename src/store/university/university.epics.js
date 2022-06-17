import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  debounceTime,
} from 'rxjs/operators';
import { creators, types } from './university.actions';
import {
  getUniversityList
} from '../../services/university.service';

export const getUniversityListEpic = (actions$) => actions$.pipe(
  ofType(types.GET_UNIVERSITY_LIST),
  debounceTime(150),
  switchMap(
    ({ payload: nameSearched }) => {
      return from(getUniversityList(nameSearched))
        .pipe(
          map((universityList) => (creators.get_university_list_successful(universityList))),
          catchError((error) => of(creators.get_university_list_failed(error))),
        )
    }
  ),
);

