import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MainBadge } from "@/components/MainBadge";

describe("MainBadge", () => {
  test("renders with the correct label", () => {
    const label = "Test Badge";

    render(<MainBadge label={label} />);

    const badgeElement = screen.getByText(label);

    expect(badgeElement).toBeInTheDocument();
  });
});
