import { START_ONBOARDING} from '../actions/types';
import initialState from '../initialState';

const initialState = {
    startedOnBoarding: false,
    showModal: false
};


export default function onBoardingReducer(state=initialState, action){
    switch (action.type) {
      case START_ONBOARDING:
        return { ...state, startedOnBoarding: !state.startedOnBoarding };

      default:
        return state;
    }
    
} 