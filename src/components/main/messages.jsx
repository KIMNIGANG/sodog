import { useEffect, useState } from "react";
import { React } from "react";
import { ref, onValue } from "firebase/database";
import { database as db } from "../../service/firebase";
import MessageBox from "./message_box";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "messages/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let message = [];

      Object.values(data).forEach((i) => {
        message.push({
          id: i.uid,
          content: i.content,
          user: i.user,
          time: i.time,
        });
      });
      setMessages(() => message);
    });
  }, []);

  return (
    <Container>
      {messages.map((m) => {
        return (
          <MessageBox
            key={m.id}
            username={m.user}
            content={m.content}
            time={m.time}
          />
        );
      })}
    </Container>
  );
};

export default Messages;
