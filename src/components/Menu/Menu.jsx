import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import DarknessIcon from "@material-ui/icons/Brightness4";
import BrightnessIcon from "@material-ui/icons/Brightness7";
import AccountIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";

import ActionLink from "components/ActionLink";
import ActionButton from "components/ActionButton";
import ModalUpload from "components/ModalUpload";
import ModalSignup from "components/ModalSignup";
import ModalLogin from "components/ModalLogin";

import { toggleTheme } from "styles/themeStorage";
import { getLoggedIn } from "utils/user";
import useStyles from "./Menu.styles";

const Menu = ({ dark, setDark }) => {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("jwt"))
  );

  const [uploadOpen, setUploadOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const openUploadModal = () => setUploadOpen(true);
  const closeUploadModal = () => setUploadOpen(false);
  const openLoginModal = () => setLoginVisible(true);
  const closeLoginModal = () => setLoginVisible(false);
  const openSignupModal = () => setSignupVisible(true);
  const closeSignupModal = () => setSignupVisible(false);

  const handleTheme = () => {
    setDark(!dark);
    toggleTheme();
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  useEffect(() => {
    getLoggedIn((loggedIn) => {
      setLoggedIn(loggedIn);
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <ActionLink
        link="/"
        icon={<HomeIcon />}
        tooltip="Homepage"
        className={classes.iconButton}
      />
      <Box display={{ xs: "none", md: "block" }}>
        <ActionLink
          external
          icon={<GitHubIcon />}
          tooltip="GitHub Repository"
          link="https://github.com/joshuajadaniel/image-repository"
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
      {loggedIn ? (
        <>
          <ModalUpload open={uploadOpen} onClose={closeUploadModal} />
          <ActionButton
            tooltip="Add Image"
            onClick={openUploadModal}
            className={classes.iconButton}
            icon={<AddIcon />}
          />
          <ActionButton
            tooltip="Account"
            icon={<AccountIcon />}
            className={classes.iconButton}
            onClick={(e) => setMenuAnchor(e.currentTarget)}
          />
          <MuiMenu
            keepMounted
            id="account-menu"
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
          >
            <MenuItem component={Link} to="/profile">
              Profile
            </MenuItem>
            <MenuItem component="button" onClick={handleLogout}>
              Logout
            </MenuItem>
          </MuiMenu>
        </>
      ) : (
        <>
          <Button
            color="inherit"
            onClick={openLoginModal}
            className={classes.loginButton}
          >
            Login
          </Button>
          <Box display={{ xs: "none", sm: "block" }}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={openSignupModal}
            >
              Signup
            </Button>
          </Box>
          <ModalLogin open={loginVisible} onClose={closeLoginModal} />
          <ModalSignup open={signupVisible} onClose={closeSignupModal} />
        </>
      )}
    </div>
  );
};

Menu.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

export default Menu;
