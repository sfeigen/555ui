//ACTIONS
import * as ACTIONS from "./../actions/actionTypes";

const initialState = {
  VAVComponents: {},
  fetching: false,
  fetched: false,
  data: null,
  errors: []
};

export default function VAVComponentReducer(state = initialState, action) {
  switch (action.type) {
    //FETCH
    case ACTIONS.VAV_COMPONENT_FETCH_PENDING: {
      return { ...state, fetching: true };
    }
    case ACTIONS.VAV_COMPONENT_FETCH_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
        VAVComponents: action.payload.message
      };
    }
    case ACTIONS.VAV_COMPONENT_FETCH_REJECTED: {
      return { ...state, fetching: false, errors: [...state.errors, action.errors] };
    }

    //ACTIVATE COMPONENT ON CLICK
    case ACTIONS.TOGGLE_VAV_COMPONENT_PENDING: {
      return { ...state, activating: true };
    }
    case ACTIONS.TOGGLE_VAV_COMPONENT_FULFILLED: {
      return { ...state, activating: false, VAVComponents: action.payload };
    }

    //ACTIVATE COMPONENT ON CLICK
    case ACTIONS.ACTIVATE_TAB_PENDING: {
      return { ...state, activatingTab: true };
    }
    case ACTIONS.ACTIVATE_TAB_FULFILLED: {
      return { ...state, activatingTab: false, activatedTab: true };
    }

    default:
      return state;
  }
}
