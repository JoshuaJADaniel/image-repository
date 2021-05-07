import ProfileNavigation from "./ProfileNavigation";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(
    <ProfileNavigation
      page=""
      setPage={() => {}}
      itemsToDelete={[]}
      setItemsToDelete={() => {}}
    />
  );

  getByLabelText("public uploads");
  getByLabelText("private uploads");
  getByLabelText("upload image(s)");
  getByLabelText("delete selected");
});

test("Buttons are clickable", () => {
  const { getByLabelText } = render(
    <ProfileNavigation
      page=""
      setPage={() => {}}
      itemsToDelete={[]}
      setItemsToDelete={() => {}}
    />
  );

  fireEvent.click(getByLabelText("public uploads"));
  fireEvent.click(getByLabelText("private uploads"));
  fireEvent.click(getByLabelText("upload image(s)"));
  fireEvent.click(getByLabelText("delete selected"));
});

test("Button deletion works with items", () => {
  const itemsToDelete = ["test"];
  const { getByLabelText, queryByRole } = render(
    <ProfileNavigation
      page=""
      setPage={() => {}}
      itemsToDelete={itemsToDelete}
      setItemsToDelete={() => {}}
    />
  );

  fireEvent.click(getByLabelText("delete selected"));
  expect(queryByRole("alert")).toBeNull();
});

test("Button deletion notifies if empty", () => {
  const { getByLabelText, getByRole } = render(
    <ProfileNavigation
      page=""
      setPage={() => {}}
      itemsToDelete={[]}
      setItemsToDelete={() => {}}
    />
  );

  fireEvent.click(getByLabelText("delete selected"));
  fireEvent.click(getByLabelText("Close"));
  getByRole("alert");
});
