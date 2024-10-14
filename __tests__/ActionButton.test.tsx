import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ActionButton } from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders the button with the provided label", () => {
    const label = "Click Me";
    const href = "/";
    // Render the ActionButton with the label prop
    render(<ActionButton href={href} label={label} />);
    // Find the button by its role and text content
    const button = screen.getByRole("button", { name: label });
    // Assert that the button is in the document
    expect(button).toBeInTheDocument();
    // Optionally, assert that the text inside the button matches the label
    expect(button).toHaveTextContent(label);
  });
});
