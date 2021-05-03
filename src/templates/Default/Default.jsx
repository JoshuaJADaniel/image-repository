import { useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";

import Header from "components/Header";
import ActionPost from "components/ActionPost";

const DefaultTemplate = ({ title, children }) => {
  useEffect(() => {
    document.title = title || "Image Repository";
  }, [title]);

  return (
    <>
      <Header />
      <Toolbar />
      <Box p={3}>{children}</Box>
      <ActionPost />
    </>
  );
};

DefaultTemplate.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultTemplate;
