import React, { useState, useEffect } from "react";
import { Information } from "../../widgets/information/information";
import { Header } from "../../widgets/header/header";
import { WorkHistory } from "../../widgets/workHistory/workHistory";
import { Portfolio } from "../../widgets/portfolio/portfolio";
import { Contacts } from "../../widgets/contacts/contacts";
import { Footer } from "../../widgets/footer/footer";
import { RightPanel } from "../../widgets/rightPanel/rightPanel";
import { WORK, EDUCATION } from "../../constants/workHistory";
import { getEducation, getWorkn } from "../../processes/getPortfolioData";

import "./homePage.css";

export const HomePage = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEducation();
        setEducation(data);
        setLoading(false);
      } catch (error) {
        console.log("ошибка при отправке с клиента: ", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
        {loading ? (
          <p>loading</p>
        ) : (
          <WorkHistory name="education" data={education} />
        )}
        <WorkHistory name="work" data={WORK} />
        <Portfolio />
        <Contacts />
        <Footer />
      </div>
      <RightPanel />
    </div>
  );
};