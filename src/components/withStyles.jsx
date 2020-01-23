import React from "react";
import { createUseStyles } from "react-jss";
import { theming } from "../jss";

const { useTheme } = theming;

export default (styles, withTheme = false) => Component => props => {
  const useStyles = createUseStyles(styles, { theming });
  let classes;
  if (withTheme) {
    const theme = useTheme();
    classes = useStyles({ ...props, theme });
  } else {
    classes = useStyles({ ...props });
  }

  // eslint-disable-next-line no-param-reassign
  Component.displayName = `withStyles(${Component.displayName ||
    Component.name})`;

  return <Component {...props} classes={classes} />;
};
