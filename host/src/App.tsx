import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ShowSwitcher from "./components/ShowSwitcher/ShowSwitcher";
import List from "micro_rick_morty/List";
import List2 from "micro_harry_potter/List2";

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
    <Footer />
    <List />
    <List2 />
  </StyledApp>
);

ReactDOM.render(<App />, document.getElementById("app"));
