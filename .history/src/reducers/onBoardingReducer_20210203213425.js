import { START_ONBOARDING} from '../actions/types';

const initialState = {
    startedOnBoarding: false
};

export default function (state=initialState, action)  {
    switch (action.type) {
        case 
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
}
    default:
    return state
}
