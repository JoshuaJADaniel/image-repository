import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  googleButton: {
    textTransform: "none",
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.border}`,
    "&:hover": { backgroundColor: theme.palette.common.white },
    "& svg": {
      width: "1.2rem",
      height: "1.2rem",
    },
  },
}));

export default styles;
