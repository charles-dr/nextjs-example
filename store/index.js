import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { lessonReducer } from '@reducers'


const reducers = combineReducers({
  lesson: lessonReducer,
})

const reduxDevtools =
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

const allStoreEnhancers = compose(applyMiddleware(thunk), reduxDevtools) //

const makeStore = () => {
  const store = createStore(reducers, allStoreEnhancers)
  return store
}

export default makeStore
