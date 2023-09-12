import React from "react";
import { Link } from "react-router-dom";
import "./portfolioCard.css";

export const PortfolioCard = ({ data }) => {
  const link = data.link.includes("http") ? (
    <a href={data.link}>
      <img src={data.img} alt={data.img} />
    </a>
  ) : (
    <Link to={data.link}>
      <img src={data.img} alt={data.img} />
    </Link>
  );

  return <div className="portfolioCard">{link}</div>;
};




























