import axios from 'axios';

const university_url = 'http://universities.hipolabs.com/search?name='

const getUniversityList = async (name = "") => {
  const response = await axios.get(university_url + name);
  return response;
}

export { getUniversityList };
