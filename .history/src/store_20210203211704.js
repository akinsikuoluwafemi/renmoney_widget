import { createStore, compose } from 'redux';
import rootReducer from './reducers'



const initialState = {
    started: false
}

const store = createStore(rootReducer, initialState)