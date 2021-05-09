import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  image: {
    width: "auto",
    maxHeight: "500px",
    marginTop: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  cancelRoot: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
    "&:hover": { backgroundColor: theme.palette.error.dark },
  },
}));

export default styles;
