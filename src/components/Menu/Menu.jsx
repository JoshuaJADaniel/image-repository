import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import DarknessIcon from "@material-ui/icons/Brightness4";
import BrightnessIcon from "@material-ui/icons/Brightness7";
import NotificationsIcon from "@material-ui/icons/Notifications";

import ActionLink from "components/ActionLink";
import ActionButton from "components/ActionButton";

import { toggleTheme } from "styles/themeStorage";
import useStyles from "./Menu.styles";

const Menu = ({ dark, setDark }) => {
  const classes = useStyles();

  const handleNotifications = () => {
    console.log("Notifications");
  };

  const handleTheme = () => {
    setDark(!dark);
    toggleTheme();
  };

  return (
    <div className={classes.wrapper}>
      <ActionLink
        link="/"
        icon={<HomeIcon />}
        tooltip="Homepage"
        className={classes.iconButton}
      />
      <Box display={{ xs: "none", sm: "block" }}>
        <ActionButton
          icon={<NotificationsIcon />}
          tooltip="Toggle Notifications"
          onClick={handleNotifications}
          className={classes.iconButton}
        />
      </Box>
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
          icon={dark ? <BrightnessIcon /> : <DarknessIcon />}
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
};

export default Menu;
