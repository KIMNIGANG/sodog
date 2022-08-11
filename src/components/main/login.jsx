import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: "CHANGE_INPUT_VALUE", payload: inputRef.current.value });
  };
  const username = useSelector((state) => state.user);
  const inputRef = useRef(null);

  return (
    <Container>
      <Input ref={inputRef} type="text" value={username} />
      <Button onClick={login}>Login</Button>
    </Container>
  );
};

export default Login;
