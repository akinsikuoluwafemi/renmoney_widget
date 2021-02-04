import { initial } from 'lodash';
import { createStore, compose } from 'redux';




const initialState = {
    started: false
}

const store = createStore(rootReducer, initialState)