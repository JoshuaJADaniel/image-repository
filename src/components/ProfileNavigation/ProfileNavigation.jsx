import { useState } from "react";
import PropTypes from "prop-types";

import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PrivateIcon from "@material-ui/icons/VisibilityOff";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import PublicIcon from "@material-ui/icons/Public";
import AddIcon from "@material-ui/icons/Add";

import AlertUser from "components/AlertUser";

import useStyles from "./ProfileNavigation.styles";

const ProfileNavigation = ({
  page,
  setPage,
  itemsToDelete,
  setItemsToDelete,
}) => {
  const classes = useStyles();
  const [notify, setNotify] = useState(false);

  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      setNotify(false);
    }
  };

  const handlePage = (e, page) => {
    switch (page) {
      case "upload":
        console.log("Upload image(s)");
        break;
      case "delete":
        if (!itemsToDelete.length) {
          setNotify(true);
        } else {
          console.log("Delete the following");
          console.log(itemsToDelete);
        }
        break;
      default:
        setItemsToDelete([]);
        setPage(page);
    }
  };

  return (
    <>
      <BottomNavigation
        showLabels
        value={page}
        onChange={handlePage}
        className={classes.navigation}
      >
        <BottomNavigationAction
          value="public uploads"
          label="Public Uploads"
          aria-label="public uploads"
          icon={<PublicIcon />}
          classes={{ label: classes.label }}
        />
        <BottomNavigationAction
          value="private uploads"
          label="Private Uploads"
          aria-label="private uploads"
          icon={<PrivateIcon />}
          classes={{ label: classes.label }}
        />
        <BottomNavigationAction
          value="upload"
          label="Upload Image(s)"
          aria-label="upload image(s)"
          icon={<AddIcon />}
          classes={{ label: classes.label }}
        />
        <BottomNavigationAction
          value="delete"
          label="Delete Selected"
          aria-label="delete selected"
          icon={
            <Badge badgeContent={itemsToDelete.length} color="error">
              <DeleteIcon />
            </Badge>
          }
          classes={{
            label: classes.label,
            root: itemsToDelete.length && classes.deletionEnabled,
          }}
        />
      </BottomNavigation>
      <AlertUser
        open={notify}
        handleClose={handleClose}
        text="Select at least one image to delete!"
      />
    </>
  );
};

ProfileNavigation.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  itemsToDelete: PropTypes.arrayOf(PropTypes.string).isRequired,
  setItemsToDelete: PropTypes.func.isRequired,
};

export default ProfileNavigation;
