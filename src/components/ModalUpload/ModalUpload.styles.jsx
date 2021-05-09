import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  errorButtonRoot: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
    "&:hover": { backgroundColor: theme.palette.error.dark },
  },
  cropper: {
    width: "auto",
    maxHeight: "400px",
    marginTop: theme.spacing(3),
  },
}));

export default styles;
