import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import AppRMI18nWrapper from "../../context/LanguageContext";

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
  const { t } = useTranslation();

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
    <AppRMI18nWrapper>
      {loading && <Loading>{t("loading")}</Loading>}
      {!loading && (
        <CardGrid>
          {rickAndMortyData.map((character: any) => (
            <Card key={character.id}>
              <CardImage src={character.image} alt={character.name} />
              <h2>
                {t("name")}: {character.name}
              </h2>
              <p>
                {t("specie")}: {character.species}
              </p>
              <p>
                {t("status")}: {character.status}
              </p>
            </Card>
          ))}
        </CardGrid>
      )}
    </AppRMI18nWrapper>
  );
};

export default ListRM;
