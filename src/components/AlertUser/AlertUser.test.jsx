import AlertUser from "./AlertUser";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText, getByLabelText } = render(
    <AlertUser text="Test" open handleClose={() => {}} />
  );

  getByText("Test");
  getByLabelText("Close");
});

test("Disables text view when closed", () => {
  const { queryByText } = render(
    <AlertUser text="Test" open={false} handleClose={() => {}} />
  );

  const text = queryByText("Test");
  expect(text).toBeNull();
});

test("Disables text on close action", () => {
  const handleClose = jest.fn();
  const { getByLabelText } = render(
    <AlertUser text="Test" open handleClose={handleClose} />
  );

  fireEvent.click(getByLabelText("Close"));
  expect(handleClose).toBeCalledTimes(1);
});
