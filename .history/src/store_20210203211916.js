import { createStore, compose } from 'redux';
import rootReducer from './reducers'



const initialState = {
    startedOn: false
}

const store = createStore(rootReducer, initialState)

export default store;