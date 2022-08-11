import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

const chatGet = (setMessages) => {
  const db = database;

  const starCountRef = ref(db, "messages/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // console.log(data);
    setMessages(() => [data]);
  });
};

export default chatGet;
