import ButtonGoogle from "./ButtonGoogle";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText } = render(<ButtonGoogle text="Login" />);

  getByText("Login");
});
