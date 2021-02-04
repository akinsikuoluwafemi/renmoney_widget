import { createStore, compose } from 'redux';
import rootReducer from './reducers'



const initialState = {
    startedOnB: false
}

const store = createStore(rootReducer, initialState)

export default store;