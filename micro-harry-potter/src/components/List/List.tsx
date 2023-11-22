import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import AppHPI18nWrapper from "../../context/LanguageContext";

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
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const harryPotterResponse = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        setHarryPotterData(harryPotterResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppHPI18nWrapper>
      {loading && <Loading>{t("loading")}</Loading>}
      {!loading && (
        <CardGrid>
          {harryPotterData.map((character: any) => (
            <Card key={character.id}>
              <CardImage src={character.image} alt={character.name} />
              <h2>
                {t("name")}: {character.name}
              </h2>
              <p>
                {t("specie")}: {character.species}
              </p>
              <p>
                {t("house")}: {character.house}
              </p>
            </Card>
          ))}
        </CardGrid>
      )}
    </AppHPI18nWrapper>
  );
};

export default ListHP;
