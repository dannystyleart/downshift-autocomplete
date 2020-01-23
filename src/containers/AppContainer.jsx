import React from "react";
import withStyles from "../components/withStyles";
import GlobalStyles from "../components/GlobalStyles";
import Select from "../components/Select";

const styles = {
  root: {
    textAlign: "center"
  }
};

const AppContainer = ({ classes }) => (
  <>
    <GlobalStyles />
    <div className={classes.root}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Select />
    </div>
  </>
);

export default withStyles(styles)(AppContainer);
