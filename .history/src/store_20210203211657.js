import { createStore, compose } from 'redux';
import rootReducer from '../'



const initialState = {
    started: false
}

const store = createStore(rootReducer, initialState)