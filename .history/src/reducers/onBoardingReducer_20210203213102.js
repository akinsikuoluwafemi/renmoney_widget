import { START_ONBOARDING} from '../actions/types';

const initialState = {
    startedOnBoarding: false
};

const on (state=initialState, action) = () => {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}

export default onBoardingReducer;