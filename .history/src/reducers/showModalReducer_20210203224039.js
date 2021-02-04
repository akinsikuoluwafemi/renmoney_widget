import {  SHOW_MODAL } from "../actions/types";


const initialState = {
  startedOnBoarding: false,
  showModal: false,
};

export default function showModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: !state.startedOnBoarding };

    default:
      return state;
  }
}
