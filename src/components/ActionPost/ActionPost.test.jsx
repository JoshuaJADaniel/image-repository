import ActionPost from "./ActionPost";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(<ActionPost />);

  getByLabelText("upload");
});

test("Can post via button click", () => {
  const { getByLabelText } = render(<ActionPost />);

  fireEvent.click(getByLabelText("upload"));
});
