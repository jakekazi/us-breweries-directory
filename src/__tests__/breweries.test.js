import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import BreweriesContainer from "../Containers/BreweriesContainer";

afterEach(() => {
  cleanup();
});

test("renders the landing page", () => {
  render(<App />);
});

test("should render breweries container", () => {
  render(<BreweriesContainer />);
  const breweriesElement = screen.getByTestId("breweries-div");
  expect(breweriesElement).toBeInTheDocument();
});
