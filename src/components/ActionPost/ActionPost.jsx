import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./ActionPost.styles";
import ModalUpload from "../ModalUpload";

const ActionPost = () => {
  const classes = useStyles();

  const [openUpload, setOpenUpload] = useState(false);

  const handleUpload = () => {
    setOpenUpload(true);
  };

  const closeOpenUpload = () => setOpenUpload(false);

  return (
    <>
      <ModalUpload open={openUpload} onClose={closeOpenUpload} />
      <Tooltip title="Upload Image" placement="left">
        <Fab
          color="secondary"
          aria-label="upload"
          onClick={handleUpload}
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default ActionPost;
