import Action from "./Action";
import GitHubIcon from "@material-ui/icons/GitHub";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(
    <Action tooltip="Test" icon={<GitHubIcon />} aria-label="test" />
  );

  getByLabelText("test");
});

test("Works as a button", () => {
  const mockOnClick = jest.fn();
  const { getByLabelText } = render(
    <Action
      tooltip="Test"
      aria-label="test"
      onClick={mockOnClick}
      icon={<GitHubIcon />}
    />
  );

  fireEvent.click(getByLabelText("test"));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

test("Works as a link", () => {
  const { getByLabelText } = render(
    <Action
      component="a"
      href="/"
      tooltip="Test"
      aria-label="test"
      icon={<GitHubIcon />}
    />
  );

  expect(getByLabelText("test").getAttribute("href")).toBe("/");
});
