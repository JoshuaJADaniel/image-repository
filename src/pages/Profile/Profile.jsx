import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Feed from "components/Feed";
import DefaultTemplate from "templates/Default";
import ProfileNavigation from "components/ProfileNavigation";

import { getLoggedIn } from "utils/user";
import { getUserUploads } from "utils/feed";

const Profile = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [toDelete, setToDelete] = useState([]);
  const [page, setPage] = useState("public uploads");

  if (!Boolean(localStorage.getItem("jwt"))) {
    history.push("/");
  }

  const getPublicItems = useCallback(
    (callback, nextGroupKey, nextKey) =>
      getUserUploads(callback, nextGroupKey, nextKey, setToDelete, "public"),
    []
  );

  const getPrivateItems = useCallback(
    (callback, nextGroupKey, nextKey) =>
      getUserUploads(callback, nextGroupKey, nextKey, setToDelete, "private"),
    []
  );

  const [publicItems, setPublicItems] = useState([]);
  const [privateItems, setPrivateItems] = useState([]);

  useEffect(() => {
    getLoggedIn((loggedIn) => {
      if (loggedIn) {
        setName(jwtDecode(localStorage.getItem("jwt"))["name"]);
      } else {
        history.push("/");
      }
    });
  }, [history, getPrivateItems, privateItems]);

  return (
    <DefaultTemplate title="Image Repository | Profile">
      <Box pt={2} pb={3}>
        {name && (
          <Typography
            align="center"
            variant="h4"
            component="h1"
            color="textPrimary"
          >
            Welcome {name}!
          </Typography>
        )}
      </Box>
      <Box pt={2} pb={6} color="inherit">
        <ProfileNavigation
          page={page}
          setPage={setPage}
          toDelete={toDelete}
          setToDelete={setToDelete}
        />
      </Box>
      {page === "public uploads" ? (
        <Feed
          items={publicItems}
          setItems={setPublicItems}
          getItems={getPublicItems}
        />
      ) : (
        <Feed
          items={privateItems}
          setItems={setPrivateItems}
          getItems={getPrivateItems}
        />
      )}
    </DefaultTemplate>
  );
};

export default Profile;
