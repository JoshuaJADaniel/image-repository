import Item from "components/Item";
import Box from "@material-ui/core/Box";
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

export { appendItems, layoutComplete, mapItems, Loader };
