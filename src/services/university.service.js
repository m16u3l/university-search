// import axios from 'axios';
// import { getUniversityListExternal } from './external'

const university_url = 'http://universities.hipolabs.com/search?name='

const getUniversityList = async (name = "") => {
  const response = await fetch(university_url + name);
  // const response = await getUniversityListExternal(name);
  const data = await response.json()
  return { data };
}

export { getUniversityList };
