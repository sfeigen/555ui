import * as ACTION from "./actionTypes";

export function VAVComponentFetch() {
  return function(dispatch) {
    dispatch({ type: ACTION.VAV_COMPONENT_FETCH_PENDING });
    fetch("/api")
      .then(res => res.json())
      .then(data => dispatch({ type: ACTION.VAV_COMPONENT_FETCH_FULFILLED, payload: data }))
      .catch(err => dispatch({ type: ACTION.VAV_COMPONENT_FETCH_REJECTED, errors: err }));
  };
}

export function toggleActiveVAVComponent(name, VAVComponents) {
  return function(dispatch) {
    dispatch({ type: ACTION.TOGGLE_VAV_COMPONENT_PENDING });
    if (typeof VAVComponents[name].active !== undefined) {
      VAVComponents[name].active = VAVComponents[name].active ? false : true;
    } else {
      VAVComponents[name].active = true;
    }
    dispatch({ type: ACTION.TOGGLE_VAV_COMPONENT_FULFILLED, payload: VAVComponents });
  };
}
