import ModalForm from "./ModalForm";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByTitle, getByText } = render(
    <ModalForm onClose={() => {}} open={true}>
      <h1>Test Text</h1>
    </ModalForm>
  );

  getByTitle("Close");
  getByText("Test Text");
});

test("Exists properly on close", () => {
  let open = true;
  const onClose = () => (open = false);

  const { getByTitle } = render(
    <ModalForm onClose={onClose} open={open}>
      <h1>Test Text</h1>
    </ModalForm>
  );

  fireEvent.click(getByTitle("Close"));
  expect(open).toBeFalsy();
});
