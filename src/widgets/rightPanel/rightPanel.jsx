import React from "react";
import { Navigation } from "../../features/navigation/navigation";
import { ThemeSwitcher } from "../../features/themeSwitcher/themeSwitcher";

import "./rightPanel.css";

export const RightPanel = () => {
  return (
    <div className="rightPanel">
      <ThemeSwitcher />
      <Navigation />
    </div>
  );
};