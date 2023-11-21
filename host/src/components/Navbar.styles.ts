import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1a202c; // Adjust the dark mode background color
  color: #cbd5e0; // Adjust the dark mode text color
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export { StyledNavbar, Title };
