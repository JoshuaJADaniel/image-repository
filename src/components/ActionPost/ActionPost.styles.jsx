import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    zIndex: theme.zIndex.speedDial,
  },
}));

export default styles;
