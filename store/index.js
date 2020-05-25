import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { lessonReducer } from '@reducers'


const reducers = combineReducers({
  lesson: lessonReducer,
})


const allStoreEnhancers = compose(applyMiddleware(thunk))

const makeStore = () => {
  const store = createStore(reducers, allStoreEnhancers)
  return store
}

export default makeStore
