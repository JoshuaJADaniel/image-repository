import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import useStyles from "./AlertUser.styles";

const AlertUser = ({ text, severity, open, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      classes={{ root: classes.notifyRoot }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        elevation={4}
        onClose={handleClose}
        severity={severity || "error"}
        variant="filled"
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

AlertUser.propTypes = {
  severity: PropTypes.string,
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AlertUser;
