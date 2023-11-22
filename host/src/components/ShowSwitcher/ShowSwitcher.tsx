import React from "react";
import ListRM from "micro_rick_morty/ListRM";
import ListHP from "micro_harry_potter/ListHP";
// import HarryPotterFrontend from "../Frontends/HarryPotterFrontend"; // Reemplaza con la ruta correcta de tu componente de Harry Potter
// import RickMortyFrontend from "../Frontends/RickMortyFrontend"; // Reemplaza con la ruta correcta de tu componente de Rick and Morty

type Props = {
  selectedShow: string;
};

const ShowSwitcher = ({ selectedShow }: Props) => {
  return (
    <>
      {selectedShow === "harryPotter" && <ListHP />}
      {selectedShow === "rickMorty" && <ListRM />}
    </>
  );
};

export default ShowSwitcher;
