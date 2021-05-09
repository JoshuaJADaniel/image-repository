import { useState, useEffect } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import UploadIcon from "@material-ui/icons/Publish";
import CloseIcon from "@material-ui/icons/Close";

import ModalForm from "components/ModalForm";
import AlertUser from "components/AlertUser";
import ActionButton from "components/ActionButton";

import { uploadImage } from "utils/feed";
import { getLoggedIn } from "utils/user";

import useStyles from "./ModalUpload.styles";

const ModalUpload = ({ open, onClose }) => {
  const classes = useStyles();

  const [error, setError] = useState("");
  const [notify, setNotify] = useState(false);
  const [notifyText, setNotifyText] = useState("");
  const [notifySeverity, setNotifySeverity] = useState("");
  const [imageTitle, setImageTitle] = useState("");

  const [image, setImage] = useState(null);

  const handleClose = () => {
    setImage(null);
    setImageTitle("");
    onClose();
  };

  const closeNotification = () => setNotify(false);
  const onFileChange = (e) => setImage(e.target.files[0]);
  const handleImageTitle = (e) => setImageTitle(e.target.value);

  const publishImage = () => {
    uploadImage(
      (res) => {
        if (res["error"]) {
          setError(res["error"]);
        } else {
          handleClose();
          setNotify(true);
          setNotifySeverity("success");
          setNotifyText(res["success"]);
        }
      },
      image,
      imageTitle,
      "public"
    );
  };

  useEffect(() => {
    if (open) {
      getLoggedIn((loggedIn) => {
        if (!loggedIn) {
          setNotify(true);
          setNotifySeverity("error");
          setNotifyText("Need to be logged in to upload");
        }
      });
    }
  }, [open]);

  return (
    <>
      <AlertUser
        open={notify}
        text={notifyText}
        severity={notifySeverity}
        handleClose={closeNotification}
      />
      {image ? (
        <Dialog maxWidth="md" open={open} onClose={handleClose}>
          <Box p={3}>
            <Typography align="right">
              <ActionButton
                size="small"
                tooltip="Close"
                icon={<CloseIcon />}
                onClick={handleClose}
              />
            </Typography>
            <img
              className={classes.cropper}
              alt={image ? image.name : null}
              src={image ? URL.createObjectURL(image) : null}
            />
            <Box pt={2} pb={4}>
              <TextField
                fullWidth
                type="text"
                margin="dense"
                value={imageTitle}
                label="Image title..."
                onChange={handleImageTitle}
                id="upload-image-title"
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                onClick={handleClose}
                classes={{ root: classes.errorButtonRoot }}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={publishImage}
              >
                Publish
              </Button>
            </Box>
            {error && (
              <Box pt={2}>
                <Typography color="error">{error}</Typography>
              </Box>
            )}
          </Box>
        </Dialog>
      ) : (
        <ModalForm open={open} onClose={handleClose}>
          <Box pt={5} pb={3}>
            <input
              multiple
              id="image-file"
              accept="image/jpeg,image/png"
              onChange={onFileChange}
              style={{ display: "none" }}
              type="file"
            />
            <label htmlFor="image-file">
              <Button
                fullWidth
                size="large"
                component="span"
                color="primary"
                variant="contained"
                startIcon={<UploadIcon />}
              >
                Upload
              </Button>
            </label>
          </Box>
          <Typography align="center">
            Select any image to upload (jpg, jpeg, jfif, png, etc.)
          </Typography>
        </ModalForm>
      )}
    </>
  );
};

export default ModalUpload;
