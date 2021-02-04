import { START_ONBOARDING} from '../actions/types';

const initialState = {
    startedOnBoarding: false
};

export default onBoardingrEDUCER =  (state=initialState, action)  => {
    if(action.type === START_ONBOARDING){
        return { ...state, startedOnBoarding: !state.startedOnBoarding };
    }
    return state
}
