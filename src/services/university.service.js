import axios from 'axios';

const university_url = 'http://universities.hipolabs.com/search?name='

const getUniversityList = async () => {
  const response = await axios.get(university_url);
  return response;
}


export { getUniversityList };
