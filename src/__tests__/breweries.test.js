import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

afterEach(() => {
  cleanup();
});

test("renders the landing page", () => {
  render(<App />);
});
