import Search from "./Search";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByLabelText } = render(<Search />);

  getByLabelText("search input");
  getByLabelText("search button");
});

test("Searches via enter key", () => {
  const { getByLabelText } = render(<Search />);

  const inputElement = getByLabelText("search input");
  fireEvent.keyDown(inputElement, { key: "Enter" });
});

test("Allows change of search query", () => {
  const { getByLabelText } = render(<Search />);

  const searchPhrase = "Test Search";
  const inputElement = getByLabelText("search input");
  fireEvent.change(inputElement, { target: { value: searchPhrase } });
  expect(inputElement.value).toBe(searchPhrase);
});

test("Allows typing of text", () => {
  const { getByLabelText } = render(<Search />);

  const searchPhrase = "Test Search";
  const inputElement = getByLabelText("search input");
  [...searchPhrase].forEach((letter) => {
    fireEvent.keyDown(inputElement, { key: letter });
  });
});

test("Searches via button click", () => {
  const { getByLabelText } = render(<Search />);

  fireEvent.click(getByLabelText("search button"));
});
