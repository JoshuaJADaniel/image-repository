import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./ActionPost.styles";

const ActionPost = () => {
  const classes = useStyles();

  const handleUpload = () => {
    console.log("Upload");
  };

  return (
    <Tooltip title="Upload Image(s)" placement="left">
      <Fab
        color="primary"
        aria-label="upload"
        onClick={handleUpload}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default ActionPost;
