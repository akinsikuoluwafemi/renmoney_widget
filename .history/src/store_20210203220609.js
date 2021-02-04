import { createStore, compose } from 'redux';
import rootReducer from './reducers';





const store = createStore(rootReducer, compose(window.__REDUX))
export default store;