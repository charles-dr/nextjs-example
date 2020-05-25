import Axios from './index'

const ROUTES = {
  GET_LESSONS: '/lessons'
}

export const getLessons = async ({ page = 0 }) => {
  const response = await Axios.get(ROUTES.GET_LESSONS, {
    params: {
      page: page
    }
  })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
  return response
}
