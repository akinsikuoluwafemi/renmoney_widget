import { START_ONBOARDING} from '../actions/types';

const initialState = {
    startedOnBoarding: false
};


export default function onBoardingReducer(state=initialState, action){
    switch(action.type){
        case START_ONBOARDING:
            return { ...state, startedOnBoarding };
    }
} 