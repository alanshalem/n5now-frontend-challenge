import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Loading = styled.div`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px;
`;

const Card = styled.div`
  background-color: #1a202c;
  color: #cbd5e0;
  border-radius: 8px;
  padding: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ListHP = () => {
  const [harryPotterData, setHarryPotterData] = useState([]);
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const harryPotterResponse = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        const rickAndMortyResponse = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        setHarryPotterData(harryPotterResponse.data);
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
          {harryPotterData.map((character: any) => (
            <Card key={character.id}>
              <CardImage src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>{character.species}</p>
              <p>{character.house}</p>
            </Card>
          ))}
        </CardGrid>
      )}
    </>
  );
};

export default ListHP;
