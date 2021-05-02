import { fireEvent, render } from "@testing-library/react";
import GitHubIcon from "@material-ui/icons/GitHub";
import ActionButton from "./ActionButton";

test("Renders the correct content", () => {
  const { getByLabelText } = render(
    <ActionButton
      tooltip="Test"
      aria-label="test"
      onClick={() => {}}
      icon={<GitHubIcon />}
    />
  );

  getByLabelText("test");
});

test("Works as a button", () => {
  const mockOnClick = jest.fn();
  const { getByLabelText } = render(
    <ActionButton
      tooltip="Test"
      aria-label="test"
      onClick={mockOnClick}
      icon={<GitHubIcon />}
    />
  );

  fireEvent.click(getByLabelText("test"));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
