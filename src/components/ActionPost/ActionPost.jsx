import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core";

const ActionPost = ({ classes }) => {
  const handlePost = () => {
    console.log("Post");
  };

  return (
    <Fab
      color="primary"
      aria-label="post"
      onClick={handlePost}
      className={classes.fab}
    >
      <AddIcon />
    </Fab>
  );
};

ActionPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: theme.zIndex.tooltip,
  },
});

export default withStyles(styles)(ActionPost);
