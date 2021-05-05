import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import LogoIcon from "@material-ui/icons/Wallpaper";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import ActionButton from "components/ActionButton";
import useStyles from "./ModalForm.styles";

const ModalForm = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} maxWidth="xs" onClose={onClose}>
      <Box p={3}>
        <Typography align="right">
          <ActionButton
            size="small"
            onClick={onClose}
            icon={<CloseIcon />}
            tooltip={"Close"}
          />
        </Typography>
        <Box display="flex" justifyContent="center">
          <LogoIcon className={classes.logo} />
        </Box>
        {children}
      </Box>
    </Dialog>
  );
};

ModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ModalForm;
