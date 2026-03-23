import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact us tesy cases", () =>{
    it("Should load contact us component", () => {
    render(<Contact /> );

    const heading= screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

    it("Should load button inside my contact component", () => {
    render(<Contact /> );

    const button= screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
});

})
