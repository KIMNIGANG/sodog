import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user);

  return (
    <div>
      <h1>header</h1>
      {username !== undefined && <h2>hi {username}</h2>}
    </div>
  );
};

export default Header;
