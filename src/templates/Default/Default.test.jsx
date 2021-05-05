import DefaultTemplate from "./Default";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

it("Renders the correct content", () => {
  const { getByLabelText } = render(
    <Router>
      <DefaultTemplate title="test">
        <div />
      </DefaultTemplate>
    </Router>
  );

  getByLabelText("upload");
});

it("Accepts children nodes", () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <DefaultTemplate title="test">
        <div>Test</div>
      </DefaultTemplate>
    </Router>
  );

  getByLabelText("upload");
  getByText("Test");
});
