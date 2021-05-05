import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MuiLink from "@material-ui/core/Link";
import LogoIcon from "@material-ui/icons/Wallpaper";

import { withStyles } from "@material-ui/core/styles";

import Menu from "components/Menu";
import Search from "components/Search";

const Header = ({ dark, setDark, classes }) => (
  <AppBar>
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
      <div className={classes.grow} />
      <Menu dark={dark} setDark={setDark} />
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  logoLink: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(3),
    },
  },
  logoIcon: {
    display: "flex",
    transform: "rotate(-15deg)",
  },
  grow: {
    flexGrow: 1,
  },
});

export default withStyles(styles)(Header);
