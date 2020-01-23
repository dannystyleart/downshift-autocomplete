import React from "react";
import { createTheming } from "react-jss";
import defaultTheme from "./theme";

const ThemeContext = React.createContext(defaultTheme);
export default createTheming(ThemeContext);
