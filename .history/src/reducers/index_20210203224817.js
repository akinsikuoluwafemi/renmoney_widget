import {combineReducers } from 'redux';
import onBoardingReducer from './onBoardingReducer';
import showModalReducer from './'

export default combineReducers({
    onBoarding: onBoardingReducer
})
