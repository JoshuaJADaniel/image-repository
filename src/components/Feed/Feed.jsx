import { memo, useState } from "react";
import PropTypes from "prop-types";
import Item from "components/Item";
import Box from "@material-ui/core/Box";
import { JustifiedLayout } from "@egjs/react-infinitegrid";
import CircularProgress from "@material-ui/core/CircularProgress";

const appendItems = (e, items, getItems, setItems, setShouldLoad) => {
  if (e.currentTarget.isProcessing()) {
    return;
  }

  const nextGroupKey = (+e.groupKey || 0) + 1;
  const nextKey = items.length;

  getItems(
    (newItems) => {
      setItems([...items, ...newItems]);
      if (newItems.length !== 0) {
        e.startLoading();
        setShouldLoad(true);
      } else {
        setShouldLoad(false);
      }
    },
    nextGroupKey,
    nextKey
  );
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

const Feed = memo(({ items, getItems, setItems }) => {
  const [shouldLoad, setShouldLoad] = useState(true);

  const handleAppend = (e) => {
    if (shouldLoad) {
      appendItems(e, items, getItems, setItems, setShouldLoad);
    }
  };

  return (
    <JustifiedLayout
      loading={Loader}
      data-testid="feed"
      useFirstRender={false}
      options={{ useRecycle: false }}
      groupBy={(item) => item.props["data-groupkey"]}
      layoutOptions={{
        margin: 20,
        column: Math.ceil(window.innerWidth / 400),
      }}
      onAppend={handleAppend}
      onLayoutComplete={layoutComplete}
    >
      {mapItems(items)}
    </JustifiedLayout>
  );
});

Feed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getItems: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default Feed;
