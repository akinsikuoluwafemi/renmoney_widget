import { START_ONBOARDING} from '../actions/types';


 function (state, action) {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}

export default onBoarding