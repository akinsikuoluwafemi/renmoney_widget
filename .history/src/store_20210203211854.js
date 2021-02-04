import { createStore, compose } from 'redux';
import rootReducer from './reducers'



const initialState = {
    started_on: false
}

const store = createStore(rootReducer, initialState)