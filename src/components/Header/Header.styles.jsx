import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  logoLink: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(3),
    },
  },
  logoIcon: {
    display: "flex",
    transform: "rotate(-15deg)",
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

export default styles;
