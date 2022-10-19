import { render, screen, cleanup } from "@testing-library/react";
import Breweries from "../Breweries";

test("should render breweries component", () => {
  render(<Breweries />);
  const breweriesElement = screen.getByTestId('breweries-div');
  expect(breweriesElement).toBeInTheDocument()
});
