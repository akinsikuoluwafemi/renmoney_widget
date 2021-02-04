import { createStore, compose } from 'redux';
import rootReducer from './reducers';





const store = createStore(rootReducer, compose(windo))
export default store;