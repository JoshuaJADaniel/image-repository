import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(0.5),
    },
  },
  loginButton: {
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 1, 0, 0),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0.2),
      paddingRight: theme.spacing(0.2),
      minWidth: "unset",
    },
  },
}));

export default styles;
