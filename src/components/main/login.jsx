import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch({ type: "CHANGE_INPUT_VALUE", payload: inputRef.current.value });
  };

  const username = useSelector((state) => state.user);
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" value={username} />
      <button onClick={handleChange}>Login</button>
    </div>
  );
};

export default Login;
