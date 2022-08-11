import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
`;

const Logout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "CHANGE_INPUT_VALUE", payload: undefined });
  };
  return (
    <div>
      <Button onClick={logout}>logout</Button>
    </div>
  );
};

export default Logout;
