// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// // import Hero from "../landing_Page/about/Hero";
// import Hero from "../landing_Page/home/Hero";

// describe("Hero component", () => {
//   test("renders hero image", () => {
//     render(<Hero />);
//     let heroImage = screen.getByAltText("Hero Image");
//     expect(heroImage).toBeInTheDocument();
//     expect(heroImage).toHaveAttribute("src", "media/Images/homeHero.png");
//   });

//   test("renders signup button", () => {
//     render(<Hero />);
//     let signupBtn = screen.getByRole("button");
//     expect(signupBtn).toBeInTheDocument();
//     expect(signupBtn).toHaveClass("signupBtn");
//   });

//   test("Hero text", () => {
//     render(<Hero />);
//     let heading = screen.getByRole("heading", {
//       name: "Invest in everything",
//     });
//     expect(heading).toBeInTheDocument();
//   });

//   test("Hero text", () => {
//     render(<Hero />);
//     let description = screen.getByText(
//       "Online platform to invert in Stocks, derivatives, mutual funds, and more"
//     );
//     expect(description).toBeInTheDocument();
//   });
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../landing_Page/home/HomePage";

test("HomePage renders all main sections", () => {
  render(<HomePage />);

  expect(
    screen.getByRole("heading", { name: /invest in everything/i })
  ).toBeInTheDocument();

  // Awards
  expect(
    screen.getByRole("heading", { name: /largest stock broker in india/i })
  ).toBeInTheDocument();

  // Stats
  expect(
    screen.getByRole("heading", { name: /trust with confidence/i })
  ).toBeInTheDocument();

  // Pricing
  expect(
    screen.getByText(/unbeatable pricing/i)
  ).toBeInTheDocument();

  // Education
  expect(
    screen.getByRole("heading", { name: /free and open market education/i })
  ).toBeInTheDocument();
});
