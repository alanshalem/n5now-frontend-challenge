import React from "react";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      Hecho con{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      desde{" "}
      <span role="img" aria-label="flag">
        🇦🇷
      </span>{" "}
    </StyledFooter>
  );
};

export default Footer;
