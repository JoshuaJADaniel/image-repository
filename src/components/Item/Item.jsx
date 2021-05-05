import PropTypes from "prop-types";

import { fade, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Item = ({ url, classes, title, buttons }) => (
  <div className={classes.item}>
    <div className={classes.buttonGroup}>{buttons}</div>
    <Typography className={classes.title}>{title}</Typography>
    <img src={url} alt={title} title={title} className={classes.image} />
  </div>
);

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const styles = (theme) => ({
  item: {
    overflow: "hidden",
    boxSizing: "border-box",
    "& *": { boxSizing: "border-box" },
    "&:hover button, &:hover a": { opacity: 1 },
    borderRadius: 2 * theme.shape.borderRadius,
    border: `1px solid ${theme.palette.border}`,
  },
  image: {
    width: "100%",
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: theme.palette.common.white,
    padding: theme.spacing(4, 1.5, 1, 1.5),
    background: `
      linear-gradient(
        to bottom,
        hsla(0, 0%, 10%, 0) 0%,
        hsla(0, 0%, 10%, 0.013) 6.2%,
        hsla(0, 0%, 10%, 0.049) 13.3%,
        hsla(0, 0%, 10%, 0.104) 21.2%,
        hsla(0, 0%, 10%, 0.175) 29.6%,
        hsla(0, 0%, 10%, 0.259) 38.4%,
        hsla(0, 0%, 10%, 0.352) 47.3%,
        hsla(0, 0%, 10%, 0.45) 56.2%,
        hsla(0, 0%, 10%, 0.55) 64.7%,
        hsla(0, 0%, 10%, 0.648) 72.9%,
        hsla(0, 0%, 10%, 0.741) 80.3%,
        hsla(0, 0%, 10%, 0.825) 86.8%,
        hsla(0, 0%, 10%, 0.896) 92.3%,
        hsla(0, 0%, 10%, 0.951) 96.4%,
        hsla(0, 0%, 10%, 0.987) 99.1%,
        hsl(0, 0%, 10%) 100%
      )
    `,
    borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
  },
  buttonGroup: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1.5),
    "& button, & a": {
      opacity: 0,
      margin: theme.spacing(1, 0.5),
      color: theme.palette.getContrastText(theme.palette.background.default),
      backgroundColor: fade(theme.palette.background.default, 0.7),
      transition: theme.transitions.create(["opacity", "background-color"]),
      "&:hover": {
        backgroundColor: fade(theme.palette.background.default, 0.9),
      },
    },
  },
});

export default withStyles(styles)(Item);
