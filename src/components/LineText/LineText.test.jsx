import LineText from "./LineText";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText } = render(<LineText text="Test Text" />);

  getByText("Test Text");
});
