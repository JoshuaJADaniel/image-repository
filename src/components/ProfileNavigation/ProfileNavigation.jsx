import PropTypes from "prop-types";

import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import AddIcon from "@material-ui/icons/Add";
import PublicIcon from "@material-ui/icons/Public";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import PrivateIcon from "@material-ui/icons/VisibilityOff";

import useStyles from "./ProfileNavigation.styles";

const ProfileNavigation = ({ page, setPage, itemsToDelete }) => {
  const classes = useStyles();

  const handlePage = (e, page) => {
    switch (page) {
      case "upload":
        console.log("Upload image(s)");
        break;
      case "delete":
        console.log("Items to delete");
        console.log(itemsToDelete);
        break;
      default:
        itemsToDelete.clear();
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
            <Badge badgeContent={itemsToDelete.size} color="error">
              <DeleteIcon />
            </Badge>
          }
          classes={{ label: classes.label }}
        />
      </BottomNavigation>
    </>
  );
};

ProfileNavigation.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  itemsToDelete: PropTypes.object.isRequired,
};

export default ProfileNavigation;
