import { fade, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  container: {
    width: "100%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("background-color"),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
  searchButton: {
    zIndex: 1,
    height: "100%",
    color: "inherit",
    borderRadius: theme.shape.borderRadius,
    paddingRight: theme.spacing(1),
    position: "absolute",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  searchColor: {
    color: "inherit",
  },
  searchBar: {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4.5)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "30ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
}));

export default styles;
