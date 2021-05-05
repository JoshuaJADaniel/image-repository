import PropTypes from "prop-types";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

import useStyles from "./Item.styles";

const Item = ({ url, title, size, dimensions, buttons }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <div className={classes.buttonGroup}>{buttons}</div>
      <Typography className={classes.title}>{title}</Typography>
      <img src={url} alt={title} title={title} className={classes.image} />
      <div className={classes.chipGroup}>
        {size && (
          <div>
            <Chip size="small" label={size} />
          </div>
        )}
        {dimensions && (
          <div>
            <Chip size="small" label={dimensions} />
          </div>
        )}
      </div>
    </div>
  );
};

Item.propTypes = {
  size: PropTypes.string,
  dimensions: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Item;
