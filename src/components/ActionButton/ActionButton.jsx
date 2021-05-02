import PropTypes from "prop-types";
import Action from "components/Action";

const ActionButton = ({ tooltip, icon, onClick, ...other }) => (
  <Action tooltip={tooltip} icon={icon} onClick={onClick} {...other} />
);

ActionButton.propTypes = {
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ActionButton;
