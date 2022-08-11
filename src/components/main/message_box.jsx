import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0.5em;
  font-size: 1.5em;
  color: black;
  border-bottom: solid 1px #f2f2f2;
`;
const Name = styled.div``;
const Content = styled.div`
  padding-right: 2em;
`;
const MessageBox = ({ username, content }) => {
  const currentUser = useSelector((state) => state.user);

  return (
    <div>
      <Box>
        <Name>{username}</Name>
        <Content>{content}</Content>
      </Box>
    </div>
  );
};

export default MessageBox;
