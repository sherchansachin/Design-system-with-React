import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden='true'>
    <path d="M27.1179 7.70833L18.5 16.3262L9.88206 7.70833L7.70831 9.88208L16.3262 18.5L7.70831 27.1179L9.88206 29.2917L18.5 20.6737L27.1179 29.2917L29.2916 27.1179L20.6737 18.5L29.2916 9.88208L27.1179 7.70833Z" fill="black"/>
  </CloseIconWrapper>
);


