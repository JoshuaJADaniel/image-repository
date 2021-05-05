import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const setDark = jest.fn();
  const { getByLabelText, getByText } = render(
    <Router>
      <Header dark setDark={setDark} />
    </Router>
  );

  getByLabelText("logo");
  getByLabelText("search button");
  getByLabelText("search input");
  getByText("Login");
  getByText("Signup");
});
