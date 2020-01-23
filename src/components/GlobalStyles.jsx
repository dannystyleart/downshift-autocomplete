import React from "react";
import withStyles from "./withStyles";

const styles = theme => ({
  "@global": {
    "html, body": {
      background: theme.base,
      color: theme.textColor,
      fontFamily: "sans-serif",
      fontSize: 14,
      margin: 0
    },
    html: {
      WebkitFontSmoothing: "antialiased",
      // Antialiasing.
      MozOsxFontSmoothing: "grayscale",
      // Antialiasing.
      // Change from `box-sizing: content-box` so that `width`
      // is not affected by `padding` or `border`.
      boxSizing: "border-box"
    },
    "*, *::before, *::after": {
      fontFamily: "inherit",
      boxSizing: "inherit",
      outline: "none",
      WebkitOverflowScrolling: "touch"
    }
  }
});
const GlobalStyles = () => null;

export default withStyles(styles)(GlobalStyles);
