import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  navigation: {
    background: "transparent",
  },
  label: {
    fontSize: "0.875rem",
    marginTop: theme.spacing(2),
  },
  deletionEnabled: {
    color: theme.palette.error.main,
  },
}));

export default styles;
