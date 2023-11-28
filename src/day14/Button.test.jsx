import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button Renders Correctly", () => {
  // 1) Create a virtial DOM
  // 2) Query the screen object.
  // 3) Assertion -> If/else

  render(<Button />);
  const res = screen.getByText("App");
  expect(res).toBeInTheDocument();
});

test("Button clicked", () => {
  render(<Button />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);

  const res = screen.getByText(/Text is visible/i);
  expect(res).toBeInTheDocument();
});
