import React from "react";
import ReactDOM from "react-dom";

import { theme, theming } from "./jss";
import AppContainer from "./containers/AppContainer";

const { ThemeProvider } = theming;
const rootElement = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>,
  rootElement
);
