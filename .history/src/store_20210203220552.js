import { createStore, compose } from 'redux';
import rootReducer from './reducers';





const store = createStore(rootReducer, compose)
export default store;