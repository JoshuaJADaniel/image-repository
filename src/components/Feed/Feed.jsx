import PropTypes from "prop-types";
import { JustifiedLayout } from "@egjs/react-infinitegrid";
import { Loader, appendItems, mapItems, layoutComplete } from "utils/feed";

const Feed = ({ items, getItems, setItems }) => (
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
);

Feed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getItems: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default Feed;
