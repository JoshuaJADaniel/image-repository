import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import DefaultTemplate from "templates/Default";

import Feed from "components/Feed";

import { getLoggedIn } from "utils/user";
import { getPublicItems } from "utils/feed";

const Home = () => {
  const history = useHistory();
  const [items, setItems] = useState([]);
  const jwt = new URLSearchParams(useLocation().search).get("jwt");

  if (jwt) {
    getLoggedIn((loggedIn) => {
      if (loggedIn) {
        localStorage.setItem("jwt", jwt);
        history.push("/profile");
      }
    }, jwt);
  }

  return (
    <DefaultTemplate title="Image Repository | Explore">
      <Box pt={2} pb={4}>
        <Typography component="h1" variant="h4" color="textPrimary">
          Recent Public User Uploads
        </Typography>
      </Box>
      <Feed items={items} setItems={setItems} getItems={getPublicItems} />
    </DefaultTemplate>
  );
};

export default Home;
