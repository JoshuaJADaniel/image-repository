import Item from "./Item";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByTitle, getByText } = render(
    <Item
      url="#"
      size="1kb"
      dimensions="1x1"
      buttons={[<button key="btn">Click!</button>]}
      title="Test"
    />
  );

  getByText("Test");
  getByTitle("Test");
  getByText("Click!");
});
