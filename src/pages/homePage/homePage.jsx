import React from "react";
import { Information } from "../../widgets/information/information";
import { Header } from "../../widgets/header/header";

import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
      </div>
    </div>
  );
};
