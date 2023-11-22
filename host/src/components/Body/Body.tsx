import React, { useState } from "react";
import ShowSwitcher from "../ShowSwitcher/ShowSwitcher";
import { useTranslation } from "react-i18next";

import harryPotterImage from "../../assets/harry-potter-48.png";
import rickImage from "../../assets/rick-sanchez-48.png";
import mortyImage from "../../assets/morty-smith-48.png";
import { ImageButton } from "../ImageButton/ImageButton";

import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column; // Cambia a dirección de columna para apilar verticalmente
  align-items: center;
`;

type Props = {};

const Body = (props: Props) => {
  const [selectedShow, setSelectedShow] = useState("harryPotter");

  const handleShowSwitch = (show: any) => {
    setSelectedShow(show);
  };

  return (
    <CenteredContainer>
      {selectedShow === "harryPotter" ? (
        <div>
          <ImageButton
            onClick={() => handleShowSwitch("rickMorty")}
            imageUrl={rickImage}
            altText="Rick"
          />
          <ImageButton
            onClick={() => handleShowSwitch("rickMorty")}
            imageUrl={mortyImage}
            altText="Morty"
          />
        </div>
      ) : (
        <ImageButton
          onClick={() => handleShowSwitch("harryPotter")}
          imageUrl={harryPotterImage}
          altText="Harry Potter"
        />
      )}
      <ShowSwitcher selectedShow={selectedShow} />
    </CenteredContainer>
  );
};

export default Body;
