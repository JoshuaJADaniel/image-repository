import { fade, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
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
    "& > button, & > a": {
      opacity: 0,
    },
    "& > *": {
      padding: theme.spacing(0.75),
      margin: theme.spacing(1, 0.5),
      backgroundColor: fade(theme.palette.background.paper, 0.8),
      "&:hover": { backgroundColor: fade(theme.palette.background.paper, 0.8) },
      color: theme.palette.getContrastText(theme.palette.background.default),
      transition: theme.transitions.create(["opacity"]),
    },
  },
  chipGroup: {
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(1.5),
    "& > div": {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default styles;
