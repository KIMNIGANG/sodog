import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Logout from "./logout";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5%;
  font-size: 1.5em;
  color: white;
  border-bottom: solid 1px #f2f2f2;
  background: rgb(101, 96, 182);
  background: linear-gradient(
    90deg,
    rgba(101, 96, 182, 1) 0%,
    rgba(85, 223, 251, 1) 100%
  );
`;

const User = styled.div`
  font-size: 0.7em;
`;

const Header = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <Container>
      <div>Realtime Chat</div>

      {currentUser !== undefined && (
        <User>
          Wellcome {currentUser} <Logout />
        </User>
      )}
    </Container>
  );
};

export default Header;
