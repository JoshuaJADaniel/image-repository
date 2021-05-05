import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useStyles from "./LineText.styles";

const LineText = ({ text }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <div className={classes.horizontalLine} />
      <Box px={2}>
        <Typography variant="button">{text}</Typography>
      </Box>
      <div className={classes.horizontalLine} />
    </Box>
  );
};

LineText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LineText;
