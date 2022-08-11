import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0.5em;
  font-size: 1.5em;
  color: black;
  border-bottom: solid 1px #f2f2f2;
`;
const Name = styled.div`
  font-family: sans-serif;
  font-size: 0.7em;
`;
const Content = styled.div`
  position: absolute;
  padding-left: 22%;
  font-size: 0.7em;
`;
const Time = styled.div`
  font-size: 0.5em;
  /* padding-right: 2em; */
`;
const MessageBox = ({ username, content, time }) => {
  let date = new Intl.DateTimeFormat("en-US", {
    month: Date.now() - time >= 86400000 ? "2-digit" : undefined,
    day: Date.now() - time >= 86400000 ? "2-digit" : undefined,
    hour: "2-digit",
    minute: "2-digit",
  }).format(time);
  console.log(time);
  console.log("now");
  console.log(Date.now());
  return (
    <div>
      <Box>
        <Name>{username}</Name>
        <Content>{content}</Content>
        <Time>{date}</Time>
      </Box>
    </div>
  );
};

export default MessageBox;
