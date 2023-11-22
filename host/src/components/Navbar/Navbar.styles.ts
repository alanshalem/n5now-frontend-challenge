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
  display: flex;
  align-items: center; // Centra verticalmente
  font-size: 1.5rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: 30px; // Ajusta el ancho según sea necesario
  height: 30px; // Ajusta la altura según sea necesario
  margin-right: 10px; // Ajusta el espacio entre la imagen y el texto según sea necesario
`;

export { StyledNavbar, Title, Image };
