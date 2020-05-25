import {
  getLessons
} from '@api/lesson.api'
import {
  GET_LESSONS
} from '@constants/actionTypes'

export const loadLessons = data => {
  return async dispatch => {
    await getLessons(data)
      .then(response => {
        dispatch({ type: GET_LESSONS, payload: response.data.data.lessons })
      })
      .catch(error => {
        throw error
      })
  }
}
