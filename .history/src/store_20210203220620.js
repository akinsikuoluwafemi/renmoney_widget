import { createStore, compose } from 'redux';
import rootReducer from './reducers';





const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION))
export default store;