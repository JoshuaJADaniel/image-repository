import ActionPost from "./ActionPost";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(<ActionPost />);

  getByLabelText("post");
});

test("Can post via button click", () => {
  const { getByLabelText } = render(<ActionPost />);

  fireEvent.click(getByLabelText("post"));
});
