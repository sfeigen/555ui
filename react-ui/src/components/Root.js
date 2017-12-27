//Wrap app in provider

import React from "react";
import { Provider } from "react-redux";
import App from "../App";

const Root = ({ store }) => (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

export default Root;
