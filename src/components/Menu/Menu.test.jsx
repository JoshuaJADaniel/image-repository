import Menu from "./Menu";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByTitle, getByText } = render(<Menu />);

  getByText("Login");
  getByText("Signup");
  getByTitle("Toggle Theme");
  getByTitle("GitHub Repository");
  getByTitle("Toggle Notifications");
});

test("Allows button clicks", () => {
  const { getByTitle } = render(<Menu />);

  fireEvent.click(getByTitle("Toggle Theme"));
  fireEvent.click(getByTitle("Toggle Notifications"));
});
