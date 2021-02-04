import {combineReducers } from 'redux';
import onBoardingReducer from './onBoardingReducer';
import showModalReducer from './showModalReducer'

export default combineReducers({
    onBoarding: onBoardingReducer
})
