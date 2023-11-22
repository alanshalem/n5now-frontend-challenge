import React from "react";
import ShowSwitcher from "../ShowSwitcher/ShowSwitcher";
import { useTranslation } from "react-i18next";
type Props = {};

const Body = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <ShowSwitcher />
    </>
  );
};

export default Body;
