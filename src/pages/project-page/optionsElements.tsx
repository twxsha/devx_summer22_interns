import React from "react";

export const OptionsWrapper = ({ children }) => (
  <div style={{ marginTop: "10px", display: "flex", columnGap: "10px" }}>
    {children}
  </div>
);

export const OptionItem = ({ children, label }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label>{label}</label>
    {children}
  </div>
);
