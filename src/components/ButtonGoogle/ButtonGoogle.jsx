import Button from "@material-ui/core/Button";
import { ReactComponent as GoogleIcon } from "images/google.svg";
import useStyles from "./ButtonGoogle.styles";

const ButtonGoogle = () => {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      href="#"
      size="large"
      component="a"
      variant="contained"
      startIcon={<GoogleIcon />}
      className={classes.googleButton}
    >
      Login with Google
    </Button>
  );
};

export default ButtonGoogle;
