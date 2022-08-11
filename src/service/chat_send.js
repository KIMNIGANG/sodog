import { ref, set, child, push, update } from "firebase/database";
import { database } from "./firebase";
import { uid } from "react-uid";

const chatSend = (user, content) => {
  const db = database;
  const timestamp = Date.now();
  set(ref(db, "messages/" + uid(timestamp)), {
    uid: uid(timestamp),
    content: content,
    user: user,
    time: timestamp,
  });
};

export default chatSend;
