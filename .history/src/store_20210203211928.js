import { createStore, compose } from 'redux';
import rootReducer from './reducers'



const initialState = {
    startedOnBoarding: false
}

const store = createStore(rootReducer, initialState)

export default store;