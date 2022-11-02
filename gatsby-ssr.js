import React from "react";

const headComponents = [
    <link rel="stylesheet" href="css/custom.css" key="custom" />
  ]
  
  export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents(headComponents)
  }