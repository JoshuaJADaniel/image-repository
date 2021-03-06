import { useState } from "react";
import { useHistory } from "react-router-dom";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./Search.styles";

const Search = () => {
  const history = useHistory();
  const classes = useStyles();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query !== "") {
      history.push({
        pathname: "/search",
        search: `?q=${query}`,
      });
    }
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={classes.container}>
      <IconButton
        disableRipple
        aria-label="search button"
        className={classes.searchButton}
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        value={query}
        placeholder="Search…"
        onChange={handleQuery}
        className={classes.searchColor}
        classes={{ input: classes.searchBar }}
        inputProps={{ "aria-label": "search input" }}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default Search;
