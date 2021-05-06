import ProfileNavigation from "./ProfileNavigation";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(
    <ProfileNavigation page="" setPage={() => {}} itemsToDelete={new Set()} />
  );

  getByLabelText("public uploads");
  getByLabelText("private uploads");
  getByLabelText("upload image(s)");
  getByLabelText("delete selected");
});

test("Buttons are clickable", () => {
  const { getByLabelText } = render(
    <ProfileNavigation page="" setPage={() => {}} itemsToDelete={new Set()} />
  );

  fireEvent.click(getByLabelText("public uploads"));
  fireEvent.click(getByLabelText("private uploads"));
  fireEvent.click(getByLabelText("upload image(s)"));
  fireEvent.click(getByLabelText("delete selected"));
});

test("Button deletion colors are affected", () => {
  const itemsToDelete = new Set(["test"]);
  render(
    <ProfileNavigation
      page=""
      setPage={() => {}}
      itemsToDelete={itemsToDelete}
    />
  );
});
