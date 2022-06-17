import { combineEpics } from 'redux-observable';
import {
  getUniversityListEpic,
} from './university/university.epics';
const rootEpic = combineEpics(
  getUniversityListEpic,
);

export default rootEpic;
