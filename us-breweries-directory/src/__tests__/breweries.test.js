import { render, screen, cleanup } from "@testing-library/react";
import BreweriesContainer from "../Containers/BreweriesContainer";

test("should render breweries component", () => {
  render(<BreweriesContainer />);
  const breweriesElement = screen.getByTestId('breweries-div');
  expect(breweriesElement).toBeInTheDocument()
});
