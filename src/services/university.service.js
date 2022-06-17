// import axios from 'axios';
import { getUniversityListExternal } from './external'

const university_url = '//universities.hipolabs.com/search?name='

const getUniversityList = async (name = "") => {
  // const response = await axios.get(university_url + name);
  const response = await getUniversityListExternal(name);
  return response;
}

export { getUniversityList };
