import { initial } from 'lodash';
import { createStore, compose } from 'redux';


const initialState = {}

const store = createStore(rootReducer, initialState)