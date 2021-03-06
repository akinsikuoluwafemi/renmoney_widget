import { START_ONBOARDING } from "../actions/types";

const initialState = {
  startedOnBoarding: false,
};

export default function showModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return { ...state, startedOnBoarding: !state.startedOnBoarding };

    default:
      return state;
  }
}
