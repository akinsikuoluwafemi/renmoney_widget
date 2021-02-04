import { START_ONBOARDING} from '../actions/types';

const initialState = {
    startedOnBoarding: false
};

export default onBoardingAction =  (state=initialState, action)  => {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}
