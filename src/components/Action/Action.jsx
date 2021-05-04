import PropTypes from "prop-types";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const Action = ({ tooltip, icon, ...other }) => (
  <Tooltip title={tooltip}>
    <IconButton color="inherit" {...other}>
      {icon}
    </IconButton>
  </Tooltip>
);

Action.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default Action;
