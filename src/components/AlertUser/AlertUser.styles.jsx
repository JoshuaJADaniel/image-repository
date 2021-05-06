import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  notifyRoot: {
    top: theme.mixins.toolbar.minHeight + theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      top: theme.mixins.toolbar.minHeight + theme.spacing(4),
    },
  },
}));

export default styles;
