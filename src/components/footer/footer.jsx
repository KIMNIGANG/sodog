import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgb(101, 96, 182);
  background: linear-gradient(
    90deg,
    rgba(101, 96, 182, 1) 0%,
    rgba(85, 223, 251, 1) 100%
  );
  font-size: 8px;
  color: white;
`;

const H3 = styled.h3`
  margin: 0.3em;
`;

const Footer = () => {
  return (
    <Container>
      <H3>React / React Rdeux/ Firebase Realtime Database/ Styled-Component</H3>
      <H3>Made by カン</H3>
    </Container>
  );
};

export default Footer;
