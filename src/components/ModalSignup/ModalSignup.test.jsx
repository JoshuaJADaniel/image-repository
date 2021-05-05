import ModalSignup from "./ModalSignup";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText, getByText } = render(
    <ModalSignup open onClose={() => {}} />
  );

  getByLabelText("Username");
  getByLabelText("Password");
  getByText("Signup with Google");
  getByText("Signup");
});

test("Forms allow text input", () => {
  const { getByLabelText } = render(<ModalSignup open onClose={() => {}} />);

  fireEvent.change(getByLabelText("Username"), { target: { value: "user" } });
  fireEvent.change(getByLabelText("Password"), { target: { value: "pass" } });
});

test("Buttons are clickable", () => {
  const { getByText } = render(<ModalSignup open onClose={() => {}} />);

  fireEvent.click(getByText("Signup with Google"));
  fireEvent.click(getByText("Signup"));
});
