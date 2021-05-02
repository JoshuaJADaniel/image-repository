import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Action from "components/Action";

const ActionLink = ({ external, link, tooltip, icon, ...other }) =>
  external ? (
    <Action
      href={link}
      icon={icon}
      component="a"
      target="_blank"
      tooltip={tooltip}
      {...other}
    />
  ) : (
    <Action
      to={link}
      component={Link}
      tooltip={tooltip}
      icon={icon}
      {...other}
    />
  );

ActionLink.propTypes = {
  internal: PropTypes.bool,
  link: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ActionLink;
