import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);
afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
});


test("displays the word Soccer", () => {
     const { getByText } = rtl.render (<App />);
     getByText(/Soccer/i);
   });


   afterEach(rtl.cleanup);


  

// test("renders without crashing", () => {
//   rtl.render(<App />);

// });

// test("toggle shows up", () => {
//   const { getByTestId } = rtl.render(<App />);


//   getByTestId("toggle");

// });

// test("displays the word Soccer", () => {
//   const { getByText } = render (<App />);
//   rtl.getByText(/Soccer/i);
// });

test("displays the word Players", () => {
  const { getByText } = rtl.render (<App />);
  getByText(/Players/i);
});
afterEach(rtl.cleanup);


test("displays toggle function", () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId("toggle");

}); 	