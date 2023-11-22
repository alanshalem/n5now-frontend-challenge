import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Loading = styled.div`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;

const Card = styled.div`
  flex: 1 1 400px; /* Establece el ancho mínimo y máximo */
  background-color: #1a202c;
  color: #cbd5e0;
  border-radius: 8px;
  padding: 20px;
`;

const ListRM = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rickAndMortyResponse = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setRickAndMortyData(rickAndMortyResponse.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loading>Loading...</Loading>}
      {!loading && (
        <CardGrid>
          {rickAndMortyData.map((character: any) => (
            <Card key={character.id}>
              <CardImage src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>
                <strong>Species:</strong> {character.species}
              </p>
              <p>
                <strong>House:</strong> {character.house}
              </p>
            </Card>
          ))}
        </CardGrid>
      )}
    </>
  );
};

export default ListRM;
