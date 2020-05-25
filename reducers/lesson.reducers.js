import {
  GET_LESSONS
} from '@constants/actionTypes'
import lessonAPI from '@api/lesson.api'

export default (
  state = {
    lessons: [],
    page: -1
  },
  { type, payload }
) => {
  switch (type) {
    case GET_LESSONS:
      return {...state, lessons: state.lessons.concat(payload), page: state.page + 1};
    default:
      return state
  }
}
