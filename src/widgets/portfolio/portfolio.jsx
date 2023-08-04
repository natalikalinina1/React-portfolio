import React, { useState } from "react";
import { Element } from "react-scroll";
import { PORTOFOLIO_DATA, CATEGORIES } from "../../constans/portfolio";
import { PortfolioTabs } from "../../features/portfolioTabs/portfolioTabs";
import { PortfolioCard } from "../../shared/portfolioCard/portfolioCard";

import "./portfolio.css";

export const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(PORTOFOLIO_DATA);

  const renderCards = (data) => {
    return data.map((item, index) => (
      <PortfolioCard data={item} key={`${index}_card`} />
    ));
  };

  const handleTabClick = (category) => {
    if (category === CATEGORIES[0]) {
      setPortfolioData(PORTOFOLIO_DATA);
    } else {
      const newData = PORTOFOLIO_DATA.filter(
        (item) => item.category === category
      );
      setPortfolioData(newData);
    }
  };

  return (
    <Element name="portfolio" className="portfolio">
      <PortfolioTabs onClick={handleTabClick} />
      <div className="portfolioWrapper">{renderCards(portfolioData)}</div>
    </Element>
  );
};