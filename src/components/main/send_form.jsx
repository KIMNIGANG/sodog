import React from "react";
import chatSend from "../../service/chat_send";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start center;
  padding: 2%;
  font-size: 1.3em;
  border-bottom: solid 1px #f2f2f2;
  background-color: aliceblue;
`;

const Input = styled.input`
  width: 77%;
  font-size: 1.2em;
  border: solid 1px;
  border-radius: 1em;
`;
const Button = styled.button`
  width: 20%;
  font-size: 1em;
  border: none;
  border-radius: 1em;
  background-color: #9fa8f2;
`;

const SendForm = () => {
  const username = useSelector((state) => state.user);
  const [content, setContent] = useState("");

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        id="message"
        name="message"
        onChange={changeContent}
        value={content}
      />

      <Button
        onClick={() => {
          chatSend(username, content);
        }}
      >
        Send
      </Button>
    </Container>
  );
};

export default SendForm;
