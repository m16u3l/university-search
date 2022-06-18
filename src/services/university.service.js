import { universityList } from './external'
import _ from "lodash";

const getUniversityList = async (name = "") => {
  const filterArray = _.filter(universityList, (item) => {
    if (item.name.includes(name))
      return item
  })
  return { data: filterArray };
}

export { getUniversityList };
