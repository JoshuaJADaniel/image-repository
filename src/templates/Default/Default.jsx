import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

import Header from "components/Header";
import ActionPost from "components/ActionPost";

import darkTheme from "styles/darkTheme";
import lightTheme from "styles/lightTheme";
import { getLocalTheme } from "styles/themeStorage";

const DefaultTemplate = ({ title, children }) => {
  const [dark, setDark] = useState(getLocalTheme());

  const createTheme = () =>
    dark ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Header dark={dark} setDark={setDark} />
      <Toolbar />
      <Box p={3} position="relative">
        {children}
      </Box>
      <ActionPost />
    </ThemeProvider>
  );
};

DefaultTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultTemplate;
