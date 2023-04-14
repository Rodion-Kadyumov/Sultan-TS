import { render, screen } from "@testing-library/react";
import Header from './Header';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("Renders cart length", () => {
  render(<Header />);
  const cartElement = screen.getByRole("contentinfo");
  expect(cartElement).toBeInTheDocument();
  expect(cartElement).toHaveTextContent("3");
});