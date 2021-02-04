import { initial } from 'lodash';
import { createStore, compose } from 'redux';

const store = createStore(rootReducer, initialState)