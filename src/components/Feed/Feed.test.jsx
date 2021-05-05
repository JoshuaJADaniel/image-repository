import Feed from "./Feed";
import { render, fireEvent } from "@testing-library/react";
import { layoutComplete } from "utils/feed";

let key = 0;
let items = [];

const getItems = () => {
  return [
    {
      key: key++,
      url: "#",
      title: "#",
      buttons: [],
    },
  ];
};

const setItems = (newItems) => {
  items = newItems;
};

test("Renders the correct content", () => {
  items = [];
  const { getByTestId } = render(
    <Feed getItems={getItems} setItems={setItems} items={items} />
  );

  getByTestId("feed");
  expect(items.toString()).toBe(getItems().toString());
});

test("Executes layout rendering methods", () => {
  const { getByTestId } = render(
    <Feed getItems={getItems} setItems={setItems} items={items} />
  );

  const feedElement = getByTestId("feed");
  fireEvent.scroll(feedElement, { target: { scrollY: 1000 } });
});

test("Feed util ends loading", () => {
  const event = {
    isLayout: false,
    endLoading: jest.fn(),
  };

  layoutComplete(event);
  expect(event.endLoading).toHaveBeenCalledTimes(1);
});
