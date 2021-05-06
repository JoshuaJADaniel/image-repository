import ProfileNavigation from "./ProfileNavigation";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(
    <ProfileNavigation page="" setPage={() => {}} deleteImages={() => {}} />
  );

  getByLabelText("public uploads");
  getByLabelText("private uploads");
  getByLabelText("upload image(s)");
  getByLabelText("delete selected");
});

test("Buttons are clickable", () => {
  const { getByLabelText } = render(
    <ProfileNavigation page="" setPage={() => {}} deleteImages={() => {}} />
  );

  fireEvent.click(getByLabelText("public uploads"));
  fireEvent.click(getByLabelText("private uploads"));
  fireEvent.click(getByLabelText("upload image(s)"));
  fireEvent.click(getByLabelText("delete selected"));
});

test("Delete calls callback", () => {
  const deleteImages = jest.fn();
  const { getByLabelText } = render(
    <ProfileNavigation page="" setPage={() => {}} deleteImages={deleteImages} />
  );

  fireEvent.click(getByLabelText("delete selected"));
  expect(deleteImages).toHaveBeenCalledTimes(1);
});
