import PropTypes from "prop-types";

import { getGoogleUrl } from "utils/user";
import Button from "@material-ui/core/Button";
import { ReactComponent as GoogleIcon } from "images/google.svg";
import useStyles from "./ButtonGoogle.styles";

const ButtonGoogle = ({ text }) => {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      size="large"
      component="a"
      variant="contained"
      href={getGoogleUrl()}
      startIcon={<GoogleIcon />}
      className={classes.googleButton}
    >
      {text}
    </Button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonGoogle;
