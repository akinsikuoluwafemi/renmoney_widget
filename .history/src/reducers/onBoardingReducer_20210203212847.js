import { START_ONBOARDING} from '../actions/types';


const  (state, action) {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}

export default onBoardingReducer;