import * as ACTION from "./actionTypes";

export function toggleActiveTab(cityName) {
  return function(dispatch) {
    dispatch({ type: ACTION.ACTIVATE_TAB_PENDING });
    dispatch({ type: ACTION.ACTIVATE_TAB_FULFILLED });
  };
}
