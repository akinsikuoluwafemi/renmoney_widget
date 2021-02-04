import { createStore, compose } from 'redux';
import root



const initialState = {
    started: false
}

const store = createStore(rootReducer, initialState)