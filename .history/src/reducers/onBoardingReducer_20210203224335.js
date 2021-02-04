import { START_ONBOARDING} from '../actions/types';
import initialState from '../initialState';




export default function onBoardingReducer(state=initialState.startedOnBoarding, action){
    switch (action.type) {
      case START_ONBOARDING:
        return { ...state, startedOnBoarding: !state.startedOnBoarding };

      default:
        return state;
    }
    
} 