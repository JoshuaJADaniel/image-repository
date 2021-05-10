import { memo } from "react";
import PropTypes from "prop-types";
import Item from "components/Item";
import { JustifiedLayout } from "@egjs/react-infinitegrid";

const Feed = memo(({ items }) => (
  <JustifiedLayout
    data-testid="feed"
    useFirstRender={false}
    options={{ useRecycle: false }}
    style={{ minHeight: "300px" }}
    layoutOptions={{
      margin: 20,
      column: Math.ceil(window.innerWidth / 500),
    }}
  >
    {items.map((item) => (
      <Item {...item} />
    ))}
  </JustifiedLayout>
));

Feed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Feed;
