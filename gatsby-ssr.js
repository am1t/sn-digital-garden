import React from "react";

const headComponents = [
    <link rel="stylesheet" href="css/custom.css" key="custom" />,
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" key="favicon" />
  ]
  
  export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents(headComponents)
  }