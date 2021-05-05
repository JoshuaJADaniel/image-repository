import ModalLogin from "./ModalLogin";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText, getByText } = render(
    <ModalLogin open onClose={() => {}} />
  );

  getByLabelText("Username");
  getByLabelText("Password");
  getByText("Login with Google");
  getByText("Login");
});

test("Forms allow text input", () => {
  const { getByLabelText } = render(<ModalLogin open onClose={() => {}} />);

  fireEvent.change(getByLabelText("Username"), { target: { value: "user" } });
  fireEvent.change(getByLabelText("Password"), { target: { value: "pass" } });
});

test("Buttons are clickable", () => {
  const { getByText } = render(<ModalLogin open onClose={() => {}} />);

  fireEvent.click(getByText("Login with Google"));
  fireEvent.click(getByText("Login"));
});
