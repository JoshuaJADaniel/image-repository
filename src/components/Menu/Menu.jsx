import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NotificationsIcon from "@material-ui/icons/Notifications";

import ActionLink from "components/ActionLink";
import ActionButton from "components/ActionButton";

import { withStyles } from "@material-ui/core/styles";
import { toggleTheme } from "styles/themeStorage";

const Menu = ({ dark, setDark, classes }) => {
  const handleNotifications = () => {
    console.log("Notifications");
  };

  const handleTheme = () => {
    setDark(!dark);
    toggleTheme();
  };

  return (
    <div className={classes.wrapper}>
      <ActionButton
        icon={<NotificationsIcon />}
        tooltip="Toggle Notifications"
        onClick={handleNotifications}
        className={classes.iconButton}
      />
      <Box display={{ xs: "none", md: "block" }}>
        <ActionLink
          external
          icon={<GitHubIcon />}
          tooltip="GitHub Repository"
          link="https://github.com/joshuajadaniel"
          className={classes.iconButton}
        />
      </Box>
      <Box display={{ xs: "none", sm: "block" }}>
        <ActionButton
          tooltip="Toggle Theme"
          onClick={handleTheme}
          className={classes.iconButton}
          icon={dark ? <Brightness7Icon /> : <Brightness4Icon />}
        />
      </Box>
      <Button color="inherit" className={classes.loginButton}>
        Login
      </Button>
      <Box display={{ xs: "none", sm: "block" }}>
        <Button color="inherit" variant="outlined">
          Signup
        </Button>
      </Box>
    </div>
  );
};

Menu.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(0.5),
    },
  },
  loginButton: {
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 1, 0, 0),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0.2),
      paddingRight: theme.spacing(0.2),
      minWidth: "unset",
    },
  },
});

export default withStyles(styles)(Menu);
