import { START_ONBOARDING} from '../actions/types';


export const function (state, action) {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}
