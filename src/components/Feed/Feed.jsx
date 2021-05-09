import { memo } from "react";
import PropTypes from "prop-types";
import Item from "components/Item";
import Box from "@material-ui/core/Box";
import { JustifiedLayout } from "@egjs/react-infinitegrid";
import CircularProgress from "@material-ui/core/CircularProgress";

const appendItems = (e, items, getItems, setItems) => {
  if (e.currentTarget.isProcessing()) {
    return;
  }

  const nextGroupKey = (+e.groupKey || 0) + 1;
  const nextKey = items.length;

  e.startLoading();
  const newItems = getItems(nextGroupKey, nextKey);
  setItems([...items, ...newItems]);
};

const layoutComplete = (e) => {
  !e.isLayout && e.endLoading();
};

const mapItems = (items) =>
  items.map((item) => <Item data-groupkey={item.groupKey} {...item} />);

const loaderStyles = {
  left: "50%",
  display: "none",
  transform: "translateX(-50%)",
};

const Loader = (
  <Box py={4} style={loaderStyles}>
    <CircularProgress />
  </Box>
);

const Feed = memo(({ items, getItems, setItems }) => (
  <JustifiedLayout
    loading={Loader}
    data-testid="feed"
    useFirstRender={false}
    options={{ useRecycle: false }}
    groupBy={(item) => item.props["data-groupkey"]}
    layoutOptions={{
      margin: 20,
      column: (() => {
        if (typeof window !== "undefined") {
          return Math.ceil(window.innerWidth / 400);
        } else {
          return 1;
        }
      })(),
    }}
    onAppend={(e) => appendItems(e, items, getItems, setItems)}
    onLayoutComplete={(e) => layoutComplete(e)}
  >
    {mapItems(items)}
  </JustifiedLayout>
));

Feed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getItems: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default Feed;
