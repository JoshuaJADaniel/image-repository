import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MuiLink from "@material-ui/core/Link";
import LogoIcon from "@material-ui/icons/Wallpaper";

import Menu from "components/Menu";
import Search from "components/Search";

import useStyles from "./Header.styles";

const Header = memo(({ dark, setDark }) => {
  const classes = useStyles();

  return (
    <AppBar color="secondary">
      <Toolbar>
        <MuiLink
          to="/"
          color="inherit"
          component={Link}
          className={classes.logoLink}
        >
          <LogoIcon
            color="inherit"
            fontSize="large"
            aria-label="logo"
            className={classes.logoIcon}
          />
        </MuiLink>
        <Search />
        <div className={classes.flexGrow} />
        <Menu dark={dark} setDark={setDark} />
      </Toolbar>
    </AppBar>
  );
});

Header.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

export default Header;
