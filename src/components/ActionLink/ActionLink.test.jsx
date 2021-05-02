import ActionLink from "./ActionLink";
import GitHubIcon from "@material-ui/icons/GitHub";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(
    <Router>
      <ActionLink
        link="/"
        tooltip="Test"
        icon={<GitHubIcon />}
        aria-label="test"
      />
    </Router>
  );

  getByLabelText("test");
});

test("Works as an external link", () => {
  const { getByLabelText } = render(
    <Router>
      <ActionLink
        link="/"
        external
        tooltip="Test"
        aria-label="test"
        icon={<GitHubIcon />}
      />
    </Router>
  );

  const link = getByLabelText("test");
  expect(link.getAttribute("href")).toBe("/");
  expect(link.getAttribute("target")).toBe("_blank");
});

test("Works as an internal link", () => {
  const { getByLabelText } = render(
    <Router>
      <ActionLink
        link="/"
        tooltip="Test"
        aria-label="test"
        icon={<GitHubIcon />}
      />
    </Router>
  );

  const link = getByLabelText("test");
  expect(link.getAttribute("href")).toBe("/");
  expect(link.getAttribute("target")).not.toBe("_blank");
});
