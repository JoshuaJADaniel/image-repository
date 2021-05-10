import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import DefaultTemplate from "templates/Default";

import Feed from "components/Feed";

import { getSearchItems } from "utils/feed";

const Search = () => {
  const [items, setItems] = useState([]);
  const search = new URLSearchParams(useLocation().search).get("q") || "";

  useEffect(() => {
    getSearchItems(setItems, search);
  }, [search]);

  return (
    <DefaultTemplate title="Image Repository | Search">
      <Box pt={2} pb={4}>
        <Typography component="h1" variant="h4" color="textPrimary">
          Search results for '{search}'
        </Typography>
      </Box>
      <Feed items={items} />
    </DefaultTemplate>
  );
};

export default Search;
