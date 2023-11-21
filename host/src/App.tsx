import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";

// Global styles for dark mode
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a202c; /* Adjust the dark mode background color */
    color: #cbd5e0; /* Adjust the dark mode text color */
    font-family: 'Arial', sans-serif; /* Add your preferred font-family */
    margin: 0;
    padding: 0;
  }
`;

// Styled App component
const StyledApp = styled.div`
  /* Add specific styles for your App component */
`;

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <Navbar />
    {/* Add other components or content */}
  </StyledApp>
);

ReactDOM.render(<App />, document.getElementById("app"));
