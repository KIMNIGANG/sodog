import React from "react";
import chatSend from "../../service/chat_send";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SendForm = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user);
  const [content, setContent] = useState("");

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={changeContent}
        value={content}
      />

      <button
        onClick={() => {
          chatSend(username, content);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default SendForm;
