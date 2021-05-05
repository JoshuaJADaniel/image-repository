import Menu from "./Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByTitle, getByText } = render(
    <Router>
      <Menu dark setDark={() => {}} />
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
  const { getByTitle, getAllByTitle, getByText } = render(
    <Router>
      <Menu dark setDark={() => {}} />
    </Router>
  );

  const closeModals = () => {
    getAllByTitle("Close").forEach((close) => fireEvent.click(close));
  };

  fireEvent.click(getByTitle("Toggle Theme"));
  fireEvent.click(getByTitle("Toggle Notifications"));
  fireEvent.click(getByText("Signup"));
  closeModals();
  fireEvent.click(getByText("Login"));
  closeModals();
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
