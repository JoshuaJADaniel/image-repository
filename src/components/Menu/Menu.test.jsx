import Menu from "./Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const setDark = jest.fn();
  const { getByTitle, getByText } = render(
    <Router>
      <Menu dark setDark={setDark} />
    </Router>
  );

  getByText("Login");
  getByText("Signup");
  getByTitle("Homepage");
  getByTitle("Toggle Theme");
  getByTitle("GitHub Repository");
  getByTitle("Toggle Notifications");
});

test("Allows button clicks", () => {
  const setDark = jest.fn();
  const { getByTitle } = render(
    <Router>
      <Menu dark setDark={setDark} />
    </Router>
  );

  fireEvent.click(getByTitle("Toggle Theme"));
  fireEvent.click(getByTitle("Toggle Notifications"));
});

test("Changes theme correctly", () => {
  let dark = false;
  const setDark = () => {
    dark = !dark;
  };

  const { getByTitle } = render(
    <Router>
      <Menu dark={dark} setDark={setDark} />
    </Router>
  );

  fireEvent.click(getByTitle("Toggle Theme"));
  expect(dark).toBeTruthy();
});
