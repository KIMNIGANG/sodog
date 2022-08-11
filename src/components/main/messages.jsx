import { useEffect, useState } from "react";
import { React } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../service/firebase";
import MessageBox from "./message_box";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const db = database;

  useEffect(() => {
    const starCountRef = ref(db, "messages/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(Object.values(data));
      let message = [];

      Object.values(data).forEach((i) => {
        message.push({ id: i.uid, content: i.content, user: i.user });
      });
      setMessages(() => message);
    });
  }, []);

  return (
    <Container>
      {messages.map((message) => {
        return (
          <MessageBox
            key={message.id}
            username={message.user}
            content={message.content}
          />
        );
      })}
    </Container>
  );
};

export default Messages;
