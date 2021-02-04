import { START_ONBOARDING} from '../actions/types';


export  function (state, action) {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}
