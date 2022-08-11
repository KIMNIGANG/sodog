import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Messages from "./messages";
import SendForm from "./send_form";
import { useSelector, useDispatch } from "react-redux";
import Login from "./login";

const Main = () => {
  const username = useSelector((state) => state.user);

  return (
    <section>
      <Header />
      <section>
        {username === undefined ? <Login /> : <SendForm />}

        <Messages />
      </section>
      <Footer />
    </section>
  );
};

export default Main;
