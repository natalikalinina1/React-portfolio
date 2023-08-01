import React from "react";
import "./paragraph.css";

export const Paragraph = ({ text, aling }) => {
  const alignText = aling === "center" ? "paragraphCenter" : "";

  return <p className={`paragraph ${alignText}`}>{text}</p>;
};