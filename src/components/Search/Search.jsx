import { useState } from "react";
import PropTypes from "prop-types";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { fade, withStyles } from "@material-ui/core/styles";

const Search = ({ classes }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Search for: ${query}`);
  };

  const handleQuery = (e) => setQuery(e.target.value);

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

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  container: {
    width: "100%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("background-color"),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
  searchButton: {
    zIndex: "1",
    height: "100%",
    color: "inherit",
    borderRadius: theme.shape.borderRadius,
    paddingRight: theme.spacing(1),
    position: "absolute",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  searchColor: {
    color: "inherit",
  },
  searchBar: {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4.5)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "30ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
});

export default withStyles(styles)(Search);
