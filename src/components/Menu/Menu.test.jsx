import Menu from "./Menu";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const setDark = jest.fn();
  const { getByTitle, getByText } = render(<Menu dark setDark={setDark} />);

  getByText("Login");
  getByText("Signup");
  getByTitle("Toggle Theme");
  getByTitle("GitHub Repository");
  getByTitle("Toggle Notifications");
});

test("Allows button clicks", () => {
  const setDark = jest.fn();
  const { getByTitle } = render(<Menu dark setDark={setDark} />);

  fireEvent.click(getByTitle("Toggle Theme"));
  fireEvent.click(getByTitle("Toggle Notifications"));
});

test("Changes theme correctly", () => {
  const setDark = jest.fn();
  const { getByTitle } = render(<Menu dark setDark={setDark} />);

  fireEvent.click(getByTitle("Toggle Theme"));
  expect(setDark).toHaveBeenCalledTimes(1);
});
