import { useEffect, useState } from "react";
import { React } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../service/firebase";

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
    <div className="messages">
      {messages.map((message) => {
        return (
          <p key={message.id}>
            {message.user}:{message.content}
          </p>
        );
      })}
    </div>
  );
};

export default Messages;
